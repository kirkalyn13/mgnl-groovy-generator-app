import { API_URL } from "../config";

export const generateScript =  async(query: string) => {
    const res = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.detail || "Something went wrong.");
    }
}

export const getHealthStatus =  async() => {
    const res = await fetch(`${API_URL}/health`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    return res.ok
}