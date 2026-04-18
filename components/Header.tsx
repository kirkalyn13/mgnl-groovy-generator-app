import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/generatorService";
import { API_DOCS_URL } from "../config";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getHealthStatus().then((ok) => setIsConnected(ok));
  }, []);

  return (
    <header className="bg-green-700 text-white px-4 sm:px-6 py-4 flex items-center shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-green-700 font-bold text-sm">M</span>
        </div>
        <div>
          <h1 className="text-sm sm:text-lg font-semibold leading-none">
            Magnolia Groovy Generator
          </h1>
          <p className="text-green-200 text-[10px] sm:text-xs mt-0.5">
            RAG-powered CMS script generator
          </p>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full inline-block ${
              isConnected ? "bg-green-300" : "bg-red-300"
            }`}
          ></span>
          <span className="text-green-200 text-xs hidden sm:inline">
            API Connected
          </span>
        </div>
        <a className="text-green-200 text-xs hover:text-white transition"
          href={API_DOCS_URL}>
          API Docs
        </a>
      </div>
    </header>
  );
};

export default Header;