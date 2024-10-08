// lib/apiFetcher.ts
export const apiFetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorDetail = await response.json();
    throw new Error(
      errorDetail.error || "An error occurred while fetching the data."
    );
  }
  return response.json();
};
