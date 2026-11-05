import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/generatorService";

export default function ServerLoadingBanner() {
  const [isWarmingUp, setIsWarmingUp] = useState(true);

  useEffect(() => {
    getHealthStatus().then((ok) => setIsWarmingUp(!ok));
  }, []);

  if (!isWarmingUp) return null;

  return (
    <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-400 flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
      <div className="text-sm text-blue-300">
        Server is warming up. Please wait a few moments.
      </div>
    </div>
  );
}
