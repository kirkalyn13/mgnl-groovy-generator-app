const REQUEST_HEADERS = { 
    "Content-Type": "application/json",
    "X-API-Key": import.meta.env.VITE_API_KEY ?? "",
 };

export const get = async(url: string, path: string): Promise<any> => {
    return await fetch(`${url}${path}`, {
            method: "GET",
            headers: REQUEST_HEADERS,
        });
}

export const post = async(url: string, path: string, body: any): Promise<any> => {
    const res =  await fetch(`${url}${path}`, {
            method: "POST",
            headers: REQUEST_HEADERS,
            body: JSON.stringify(body),
        });

    if (!res.ok) {
        const errorBody = await res.json().catch(() => null);
        const err = new Error(errorBody?.detail || "Something went wrong.") as Error & { status?: number };
        err.status = res.status;
        throw err;
    }

    return await res.json();
}