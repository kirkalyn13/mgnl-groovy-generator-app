import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHealthStatus } from "../services/generatorService";
import { API_DOCS_URL } from "../config";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getHealthStatus().then((ok) => setIsConnected(ok));
  }, []);

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-4 flex items-center shadow-sm">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-green-400 font-bold text-sm">M</span>
        </div>
        <div>
          <h1 className="text-sm sm:text-lg font-semibold leading-none text-white">
            Magnolia Groovy Generator
          </h1>
          <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">
            RAG-powered CMS script generator
          </p>
        </div>
      </Link>
      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full inline-block ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="text-gray-400 text-xs hidden sm:inline">
            API Connected
          </span>
        </div>
        <Link to="/about" className="text-gray-300 text-xs hover:text-white transition">
          About
        </Link>
        <a href={API_DOCS_URL} className="text-gray-300 text-xs hover:text-white transition">
          API Docs
        </a>
      </div>
    </header>
  );
};

export default Header;
