/** @format */
'use client'

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=8c3d0ece8109e255ddbf0235c3ecf18b&cnt=56

type WeatherData = {
  cod: string;          // Status code
  message: number;      // Message or status
  cnt: number;          // Count of forecast entries
  list: Forecast[];     // Array of forecast entries
  city: City;           // City information
};

type Forecast = {
  dt: number;           // Time of the forecast (in Unix timestamp format)
  main: MainWeather;    // Main weather data (temperature, pressure, etc.)
  weather: Weather[];   // Array of weather conditions
  clouds: Clouds;       // Cloud information
  wind: Wind;           // Wind data
  visibility: number;   // Visibility in meters
  pop: number;          // Probability of precipitation
  sys: Sys;             // System information (e.g., day/night)
  dt_txt: string;       // Forecast date and time as a string
};

type MainWeather = {
  temp: number;         // Current temperature (Kelvin)
  feels_like: number;   // "Feels like" temperature (Kelvin)
  temp_min: number;     // Minimum temperature (Kelvin)
  temp_max: number;     // Maximum temperature (Kelvin)
  pressure: number;     // Atmospheric pressure (hPa)
  sea_level: number;    // Sea-level pressure (hPa)
  grnd_level: number;   // Ground-level pressure (hPa)
  humidity: number;     // Humidity percentage
  temp_kf: number;      // Temperature correction factor
};

type Weather = {
  id: number;           // Weather condition ID
  main: string;         // Group of weather parameters (e.g., Rain, Snow)
  description: string;  // Weather description (e.g., light rain)
  icon: string;         // Weather icon code
};

type Clouds = {
  all: number;          // Cloudiness percentage
};

type Wind = {
  speed: number;        // Wind speed (m/s)
  deg: number;          // Wind direction (degrees)
  gust: number;         // Wind gust speed (m/s)
};

type Sys = {
  pod: string;          // Part of the day (e.g., 'd' for day, 'n' for night)
};

type City = {
  id: number;           // City ID
  name: string;         // City name
  coord: Coordinates;   // Geographical coordinates of the city
  country: string;      // Country code
  population: number;   // City population
  timezone: number;     // Timezone offset from UTC (in seconds)
  sunrise: number;      // Sunrise time (Unix timestamp)
  sunset: number;       // Sunset time (Unix timestamp)
};

type Coordinates = {
  lat: number;          // Latitude
  lon: number;          // Longitude
};

const queryClient = new QueryClient();

export default function Home() {
  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ["repoData"], 
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
    );
    return data;
    
    }})
  
   
    
    // queryFn: () =>
      // fetch(
      //   'https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=8c3d0ece8109e255ddbf0235c3ecf18b&cnt=56'
      // ).then((res) =>
      //   res.json(),
      // ),
  
  console.log("data", data);

  if (isPending) return 'Loading...'

  return (
    <div className = "flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
