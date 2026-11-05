import { useEffect, useRef, useState } from "react";
import { useHealthStatus } from "../hooks/useHealthStatus";

const MIN_WAIT_MS = 3000;
const RECOVERED_MS = 3000;

const STYLES = {
  warming: {
    box: "border-green-500/30 bg-green-500/10",
    bar: "via-green-400",
    title: "text-green-200",
    body: "text-green-300/80",
  },
  disconnected: {
    box: "border-amber-500/30 bg-amber-500/10",
    bar: "via-amber-400",
    title: "text-amber-200",
    body: "text-amber-300/80",
  },
  recovered: {
    box: "border-green-500/40 bg-green-500/15",
    bar: "via-green-300",
    title: "text-green-100",
    body: "text-green-200/80",
  },
} as const;

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

export default function ServerLoadingBanner() {
  const isConnected = useHealthStatus();
  const [elapsed, setElapsed] = useState(0);
  const [everConnected, setEverConnected] = useState(false);
  const [showRecovered, setShowRecovered] = useState(false);
  const downSince = useRef<number | null>(null);
  const recoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (isConnected) {
      const waited = downSince.current ? Date.now() - downSince.current : 0;
      downSince.current = null;
      setElapsed(0);
      setEverConnected(true);
      if (waited > MIN_WAIT_MS) {
        setShowRecovered(true);
        clearTimeout(recoverTimer.current);
        recoverTimer.current = setTimeout(() => setShowRecovered(false), RECOVERED_MS);
      }
      return;
    }

    clearTimeout(recoverTimer.current);
    setShowRecovered(false);
    if (downSince.current === null) downSince.current = Date.now();

    const id = setInterval(() => {
      const start = downSince.current ?? Date.now();
      setElapsed(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [isConnected]);

  useEffect(() => () => clearTimeout(recoverTimer.current), []);

  const status = isConnected
    ? showRecovered ? "recovered" : null
    : everConnected ? "disconnected" : "warming";

  if (!status || (status === "warming" && elapsed < 1)) return null;

  const style = STYLES[status];

  const content = {
    warming: {
      title: "Waking up the server",
      body: `The server is starting up after a period of inactivity. This can take up to a minute. ${elapsed}s so far.`,
      icon: (
        <svg {...ICON_PROPS} className="h-5 w-5 animate-spin">
          <circle cx="12" cy="12" r="10" className="opacity-25" />
          <path d="M12 2a10 10 0 0 1 10 10" />
        </svg>
      ),
    },
    disconnected: {
      title: "Connection lost",
      body: "Can't reach the server right now. Retrying automatically.",
      icon: (
        <svg {...ICON_PROPS}>
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" x2="12" y1="9" y2="13" />
          <line x1="12" x2="12.01" y1="17" y2="17" />
        </svg>
      ),
    },
    recovered: {
      title: "Back online",
      body: "The server is ready. Go ahead and generate a script.",
      icon: (
        <svg {...ICON_PROPS}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  }[status];

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fade-up relative overflow-hidden rounded-xl border shadow-lg shadow-black/30 ${style.box}`}
    >
      <div
        aria-hidden="true"
        className={`h-0.5 bg-gradient-to-r from-transparent ${style.bar} to-transparent ${status === "recovered" ? "" : "animate-pulse"}`}
      />
      <div className="flex items-start gap-3 p-4">
        <span className={`mt-0.5 shrink-0 ${style.title}`}>{content.icon}</span>
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${style.title}`}>{content.title}</p>
          <p className={`mt-0.5 text-sm leading-relaxed ${style.body}`}>{content.body}</p>
        </div>
      </div>
    </div>
  );
}