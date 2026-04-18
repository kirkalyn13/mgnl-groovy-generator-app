import { useState, useEffect } from "react";
import { API_URL } from "../config";

export default function InfoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isLocal = API_URL.includes("localhost")
    const dismissed = localStorage.getItem("info_popup_dismissed");
    if (isLocal && !dismissed) setVisible(true);
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
            className="text-gray-400 hover:text-gray-600 text-xl leading-none mt-0.5"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <p>This app requires the following services to be running locally:</p>
          <p className="text-gray-400 text-xs">
            Run <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-600">ollama serve</code> before starting.
          </p>
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