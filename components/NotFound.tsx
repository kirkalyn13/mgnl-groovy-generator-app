import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const REDIRECT_SECONDS = 10;

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);
  const [autoRedirect, setAutoRedirect] = useState(true);

  useEffect(() => {
    if (!autoRedirect) return;
    if (seconds <= 0) {
      navigate("/", { replace: true });
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [autoRedirect, seconds, navigate]);

  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-gray-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.25)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Error 404
        </span>

        <h1 className="mt-6 bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-7xl font-bold leading-none tracking-tight text-transparent sm:text-9xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          This script doesn't exist
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-gray-400">
          The page you were looking for has moved, been removed, or never made it past the validator.
        </p>

        <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-xl border border-gray-700 bg-gray-950 text-left shadow-2xl shadow-black/60">
          <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs font-medium text-gray-500">groovy-generator</span>
          </div>
          <div className="space-y-1 px-5 py-4 font-mono text-sm">
            <p className="break-all text-gray-100">
              <span className="text-green-400" aria-hidden="true">&gt; </span>
              GET {location.pathname}
            </p>
            <p className="text-red-400">404 Not Found</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-green-500 px-6 py-3 font-semibold text-gray-950 shadow-lg shadow-green-500/25 transition hover:-translate-y-0.5 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Back to the generator
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-900/60 px-6 py-3 font-semibold text-gray-200 transition hover:-translate-y-0.5 hover:border-gray-500 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            About
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-gray-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Go back
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-xs" role="status" aria-live="polite">
          {autoRedirect ? (
            <>
              <p className="text-sm text-gray-400">
                Redirecting to the generator in <span className="font-semibold text-green-400">{seconds}s</span>
              </p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-gray-800" aria-hidden="true">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-[width] duration-1000 ease-linear"
                  style={{ width: `${(seconds / REDIRECT_SECONDS) * 100}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => setAutoRedirect(false)}
                className="mt-3 text-sm font-medium text-gray-500 underline-offset-4 transition hover:text-gray-300 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                Cancel redirect
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">Auto redirect cancelled.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotFound;