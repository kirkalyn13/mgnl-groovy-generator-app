import { API_URL } from "../config";
import { get, post } from "./baseService";

export const generateScript =  async(query: string, workspaces: string[], properties: string[]) => {
    const res = await post(API_URL, "/generate", { query, workspaces, properties })
    return res
}

export const getHealthStatus =  async() => {
    const res = await get(API_URL, "/health")
    return res.ok
}