import React from "react";
import DayCard from "./DayCard";
import type { DayForecast } from "./types";

interface WeatherForecastProps {
  city: string;
  forecasts: DayForecast[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({
  city,
  forecasts,
}) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg max-w-3xl mx-auto">
      <div className="bg-blue-950 text-white p-2 border-b border-blue-900">
        <h2 className="text-lg font-bold">{city}</h2>
      </div>
      <div className="bg-blue-950 flex divide-x divide-blue-900">
        {forecasts.map((forecast, index) => (
          <DayCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
