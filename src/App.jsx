import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import InputCard from "../components/InputCard";
import OutputCard from "../components/OutputCard";
import { API_URL } from "../config";
import { generateScript } from "../services/generatorService";

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [properties, setProperties] = useState([]);
  const outputRef = useRef(null);

  const handleGenerate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateScript(query, properties)
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
    if (result?.response) {
      navigator.clipboard.writeText(result.response);
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
        <InputCard 
          query={query} 
          handleKeyDown={handleKeyDown}
          handleGenerate={handleGenerate}
          setQuery={setQuery}
          loading={loading}
          properties={properties}
          setProperties={setProperties} />
        {loading && <Loader message="Generating script..."/>}
        {error && Error}
        {result && <OutputCard result={result} handleCopy={handleCopy}/>}
      </main>
      <Footer />
    </div>
  );
}