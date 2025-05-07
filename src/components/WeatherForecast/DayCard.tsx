import React from "react";
import type { DayForecast } from "./types";

// Weather condition icons
const weatherIcons = {
  sunny: "☀️",
  cloudy: "☁️",
  rainy: "🌧️",
};

interface DayCardProps {
  forecast: DayForecast;
}

const DayCard: React.FC<DayCardProps> = ({ forecast }) => {
  const { date, day, condition, highTemp, lowTemp, isWeekend, isSunday } =
    forecast;

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`text-xs font-semibold ${
          isSunday ? "text-red-500" : isWeekend ? "text-blue-400" : "text-white"
        }`}
      >
        {date}({day})
      </div>
      <div className="text-xl my-1">
        {weatherIcons[condition as keyof typeof weatherIcons]}
      </div>
      <div className="flex gap-2 text-xs">
        <span className="text-red-500">{highTemp}</span>
        <span className="text-blue-400">{lowTemp}</span>
      </div>
    </div>
  );
};

export default DayCard;
