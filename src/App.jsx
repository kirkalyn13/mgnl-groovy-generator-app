import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import InputCard from "../components/InputCard";
import OutputCard from "../components/OutputCard";
import InfoPopup from "../components/InfoPopup";
import ServerLoadingBanner from "../components/ServerLoadingBanner";
import About from "../components/About";
import SEO from "../components/SEO";
import NotFound from "../components/NotFound";
import { API_URL } from "../config";
import { generateScript } from "../services/generatorService";
import { useAtom } from "jotai";
import { propertiesAtom, workspaceAtom } from "../store";

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const outputRef = useRef(null);
  const [ workspaces ] = useAtom(workspaceAtom)
  const [ properties ] = useAtom(propertiesAtom)

  const handleGenerate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateScript(query, workspaces, properties)
      setResult(data);
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } catch (err) {
      console.error("ERROR", err);
      if (err.status === 429) {
        setError("One request at a time, please — try again in a few seconds.");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    const text = result?.script;
    if (!text) return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("clipboard error:", err);
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleGenerate();
    }
  };

  return (
    <BrowserRouter>
      <SEO />
      <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={
              <div className="max-w-3xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
                <InfoPopup />
                <ServerLoadingBanner />
                <InputCard
                  query={query}
                  handleKeyDown={handleKeyDown}
                  handleGenerate={handleGenerate}
                  setQuery={setQuery}
                  loading={loading}
                />
                {loading && <div className="fade-up"><Loader message="Generating script..."/></div>}
                {error && <div className="fade-up"><Error error={error} /></div>}
                {result && <div className="fade-up"><OutputCard result={result} handleCopy={handleCopy}/></div>}
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/generate" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
