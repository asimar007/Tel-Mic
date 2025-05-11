import React, { useState } from "react";
import type { DayForecast } from "../types/types";

const WeatherForecast: React.FC = () => {
  const [forecastData] = useState<DayForecast[]>([
    {
      date: "12",
      day: "木",
      condition: "sunny",
      highTemp: 25,
      lowTemp: 13,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "13",
      day: "金",
      condition: "cloudy",
      highTemp: 25,
      lowTemp: 15,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "14",
      day: "土",
      condition: "sunny",
      highTemp: 29,
      lowTemp: 17,
      isWeekend: true,
      isSunday: false,
    },
    {
      date: "15",
      day: "日",
      condition: "rainy",
      highTemp: 22,
      lowTemp: 14,
      isWeekend: true,
      isSunday: true,
    },
    {
      date: "16",
      day: "月",
      condition: "sunny",
      highTemp: 26,
      lowTemp: 13,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "17",
      day: "火",
      condition: "cloudy",
      highTemp: 24,
      lowTemp: 17,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "18",
      day: "水",
      condition: "rainy",
      highTemp: 22,
      lowTemp: 13,
      isWeekend: false,
      isSunday: false,
    },
  ]);

  // DayCard component remains unchanged to maintain UI
  const DayCard: React.FC<{ forecast: DayForecast }> = ({ forecast }) => {
    const { date, day, condition, highTemp, lowTemp, isWeekend, isSunday } =
      forecast;

    return (
      <div className="flex flex-col items-center text-center">
        <div
          className={`text-xs font-semibold ${
            isSunday
              ? "text-red-500"
              : isWeekend
              ? "text-blue-400"
              : "text-white"
          }`}
        >
          {date}({day})
        </div>
        <div className="text-xl my-1">
          {(() => {
            switch (condition) {
              case "sunny":
                return "☀️";
              case "cloudy":
                return "☁️";
              case "rainy":
                return "🌧️";
              case "snowy":
                return "❄️";
              default:
                return "☀️";
            }
          })()}
        </div>
        <div className="flex gap-2 text-xs">
          <span className="text-red-500">{highTemp}</span>
          <span className="text-blue-400">{lowTemp}</span>
        </div>
      </div>
    );
  };

  // UI remains unchanged to maintain the same design
  return (
    <div className="border border-blue-900 rounded-lg p-1 from-blue-950 to-blue-900 w-full shadow-xl">
      <div className="text-white">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            名古屋
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {forecastData.map((day, index) => (
            <div
              key={index}
              className={`transform hover:scale-105 transition-transform duration-200 ${
                day.isWeekend ? "bg-blue-800/30" : "bg-blue-900/30"
              } rounded-lg p-2`}
            >
              <DayCard forecast={day} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
