import { AQIApiResponse } from "@/types/aqi-api-response";
import { AQI_API_TOKEN } from "@/utils/constants/tokens";

async function getAQI(cityName: string): Promise<AQIApiResponse> {
  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${cityName}/?token=${AQI_API_TOKEN}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${cityName}`);
    }
    return await response.json();
  } catch (error) {
    // Handle error
    process.env.NODE_ENV === "development" &&
      console.error("Error fetching AQI data:", error);
    throw error;
  }
}

export default getAQI;
