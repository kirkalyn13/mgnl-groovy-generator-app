import { Link } from "react-router-dom";
import { GITHUB_URL, PORTFOLIO_URL } from "../config";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 bg-gray-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent"
      />

      <div className="px-4 py-6 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">Magnolia Groovy Generator</p>
            <nav aria-label="Footer" className="mt-2 flex items-center justify-center gap-4 text-sm text-gray-400 sm:justify-start">
              <Link to="/" className="transition hover:text-green-400">Generator</Link>
              <Link to="/about" className="transition hover:text-green-400">About</Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-green-400"
              >
                GitHub
              </a>
            </nav>
          </div>

          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-gray-800 bg-gray-900 py-1.5 pl-1.5 pr-5 transition hover:border-green-500/40 hover:bg-gray-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-sm font-bold text-gray-950"
            >
              KS
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[11px] uppercase tracking-wider text-gray-500">Built by</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-white transition group-hover:text-green-300">
                 Kirk Alyn Santos
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>
            </span>
          </a>
        </div>

        <p className="mt-6 border-t border-gray-800/70 pt-4 text-center text-xs text-white">
          &copy; {year}  Kirk Alyn Santos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer