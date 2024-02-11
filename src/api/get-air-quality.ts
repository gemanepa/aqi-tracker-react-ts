import { AQIApiResponse } from "../types/aqi-api-response";

async function getAQI(cityName: string): Promise<AQIApiResponse> {
  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${cityName}/?token=${
        import.meta.env.VITE_AQI_API_TOKEN
      }`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${cityName}`);
    }
    return await response.json();
  } catch (error) {
    // Handle error
    console.error("Error fetching AQI data:", error);
    throw error;
  }
}

export default getAQI;
