import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_DOCS_URL, GITHUB_URL } from "../config";
import { useHealthStatus } from "../hooks/useHealthStatus";

const Header = () => {
  const isConnected = useHealthStatus();

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-4 flex items-center shadow-sm">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <div className="hidden sm:inline">
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
        <a
          href={API_DOCS_URL} className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer">
          API Docs
        </a>
        <a
          href={GITHUB_URL} className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.013-1.416-4.013-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.926.43.312.833 1.123.833 2.246v3.09c0 .319.193.694.802.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
