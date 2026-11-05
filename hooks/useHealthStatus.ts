import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/generatorService";

export function useHealthStatus() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const ok = await getHealthStatus();
        setIsConnected(ok);
      } catch (err) {
        console.error("Health check failed:", err);
        setIsConnected(false);
      }
    };

    // Initial check
    checkHealth();

    // Adaptive polling: 5 seconds when disconnected, 1 minute when connected
    let intervalId;
    
    if (isConnected) {
      // Server is up - check less frequently (every minute)
      intervalId = setInterval(checkHealth, 60000);
    } else {
      // Server is down - check more frequently (every 5 seconds)
      intervalId = setInterval(checkHealth, 5000);
    }

    return () => clearInterval(intervalId);
  }, [isConnected]);

  return isConnected;
}
