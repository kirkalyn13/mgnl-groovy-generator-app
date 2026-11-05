import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/generatorService";

export function useHealthStatus() {
  const [isConnected, setIsConnected] = useState(false); // Default to disconnected so banner shows on error

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const ok = await getHealthStatus();
        setIsConnected(ok);
      } catch (err) {
        console.error("Health check failed:", err);
      }
    };
    
    checkHealth();
    const interval = setInterval(checkHealth, 5000);

    return () => clearInterval(interval);
  }, []);

  return isConnected;
}
