import { useState, useEffect } from "react";
import { API_URL } from "../config";

export default function InfoPopup() {
  const [visible, setVisible] = useState(false);
  const isLocal = API_URL.includes("localhost");

  useEffect(() => {
    const dismissed = localStorage.getItem("info_popup_dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg max-w-md w-full p-6 flex flex-col gap-4">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-green-700 text-lg">ℹ</span>
            </div>
            <h2 className="text-base font-semibold text-gray-800">Before you get started</h2>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-black text-xl leading-none mt-0.5"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 text-sm text-black">
          <p>This app requires the backend server to be running and reachable.</p>
          <ul className="list-disc pl-5 space-y-1">
            {!isLocal && (
              <li className="text-gray-400 text-xs">
                Using the <span className="bg-gray-100 px-1 py-0.5 rounded text-black">hosted version</span>? The backend may take a moment to spin up if it's been <span className="bg-gray-100 px-1 py-0.5 rounded text-black">idle</span> — please <span className="bg-gray-100 px-1 py-0.5 rounded text-black">wait a few seconds and try again.</span>
              </li>
            )}
            {isLocal && (
              <li className="text-gray-400 text-xs">
                Running locally? Start <code className="bg-gray-100 px-1 py-0.5 rounded text-black">ollama serve</code> and the <code className="bg-gray-100 px-1 py-0.5 rounded text-black">mgnl-groovy-generator</code> server before using the app.
              </li>
            )}
            <li className="text-gray-400 text-xs font-bold">
              To keep the service available for everyone, <span className="bg-gray-100 px-1 py-0.5 rounded text-black">requests are limited to one every 5 seconds</span> — you may see a brief wait during busy periods.
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) localStorage.setItem("info_popup_dismissed", "true");
                else localStorage.removeItem("info_popup_dismissed");
              }}
              className="accent-green-600"
            />
            Don't show again
          </label>
          <button
            onClick={handleDismiss}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
}