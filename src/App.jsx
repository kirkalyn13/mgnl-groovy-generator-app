import { useState, useRef } from "react";

const API_URL = "http://localhost:8000";

function Header() {
  return (
    <header className="bg-green-700 text-white px-6 py-4 flex items-center gap-3 shadow-sm">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <span className="text-green-700 font-bold text-sm">M</span>
      </div>
      <div>
        <h1 className="text-lg font-semibold leading-none">Magnolia Groovy Generator</h1>
        <p className="text-green-200 text-xs mt-0.5">RAG-powered CMS script generator</p>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-300 inline-block"></span>
        <span className="text-green-200 text-xs">API connected</span>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-3 text-center">
      <p className="text-gray-400 text-xs">
        Magnolia Groovy Generator &mdash; Powered by LlamaIndex + Qdrant + Ollama
      </p>
    </footer>
  );
}

function Loader() {
  return (
    <div className="flex items-center gap-3 py-4 px-2">
      <div className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:0ms]"></span>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:300ms]"></span>
      </div>
      <span className="text-sm text-gray-500">Generating script...</span>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const outputRef = useRef(null);

  const handleGenerate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Something went wrong.");
      }

      setResult(data);
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      console.log(result)
    }
  };

  const handleCopy = () => {
    if (result?.script) {
      navigator.clipboard.writeText(result.script);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col gap-6">

        {/* Input Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe the Groovy script you need
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition"
            rows={4}
            placeholder="e.g. Generate a Magnolia CMS Groovy script to retrieve all published pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-400">Press Cmd+Enter to generate</span>
            <button
              onClick={handleGenerate}
              disabled={loading || !query.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2 rounded-lg transition"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Loader */}
        {loading && (
          <div className="bg-white rounded-xl border border-gray-200 px-6">
            <Loader />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4">
            <p className="text-sm text-red-600 font-medium">Error</p>
            <p className="text-sm text-red-500 mt-1">{error}</p>
          </div>
        )}

        {/* Output Card */}
        {result && (
          <div ref={outputRef} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">

            {/* Meta row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium text-gray-700">Generated Script</span>
              </div>
              <div className="flex items-center gap-3">
                {result.retries > 0 && (
                  <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {result.retries} retry
                  </span>
                )}
                <button
                  onClick={handleCopy}
                  className="text-xs text-green-600 hover:text-green-700 border border-green-200 hover:border-green-400 px-3 py-1 rounded-lg transition"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Script Output */}
            <div className="relative">
              <pre className="overflow-y-auto max-h-96 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-800 font-mono leading-relaxed whitespace-pre-wrap break-words">
                {result.response}
              </pre>
            </div>

            {/* Query echo */}
            <div className="border-t border-gray-100 pt-3">
              <p className="text-xs text-gray-400">
                <span className="font-medium text-gray-500">Query:</span> {result.query}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}