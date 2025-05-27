"use server";

import { WeatherData } from "@/types/weather";
import { z } from "zod";

const weatehrSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    humidity: z.number(),
    feels_like: z.number(),
  }),
  weather: z.array(
    z.object({
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
  wind: z.object({
    speed: z.number(),
  }),
});

export async function getWeatherData(
  city: string
): Promise<{ data?: WeatherData | null; error?: string }> {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OpenWeatherAPIKey}`;

  try {
    if (!city.trim()) {
      return { error: "At least one city name is required :(" };
    }

    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error("Can't find this city :(");
    }

    const rawData = await res.json();
    const data = weatehrSchema.parse(rawData);
    return { data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: "Invalid weather data recived :(" };
    }
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch weather data :(",
    };
  }
}
