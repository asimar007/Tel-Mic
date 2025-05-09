import React from "react";
import type { DayForecast } from "../types/types";

const WeatherForecast: React.FC = () => {
  // Hardcoded forecast data based on the image
  const forecastData: DayForecast[] = [
    {
      date: "17",
      day: "木",
      condition: "sunny",
      highTemp: 25,
      lowTemp: 13,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "18",
      day: "金",
      condition: "cloudy",
      highTemp: 25,
      lowTemp: 15,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "19",
      day: "土",
      condition: "sunny",
      highTemp: 29,
      lowTemp: 17,
      isWeekend: true,
      isSunday: false,
    },
    {
      date: "20",
      day: "日",
      condition: "rainy",
      highTemp: 22,
      lowTemp: 14,
      isWeekend: true,
      isSunday: true,
    },
    {
      date: "21",
      day: "月",
      condition: "sunny",
      highTemp: 26,
      lowTemp: 13,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "22",
      day: "火",
      condition: "cloudy",
      highTemp: 24,
      lowTemp: 17,
      isWeekend: false,
      isSunday: false,
    },
    {
      date: "23",
      day: "水",
      condition: "rainy",
      highTemp: 22,
      lowTemp: 13,
      isWeekend: false,
      isSunday: false,
    },
  ];

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

  return (
    <div className="border border-blue-900 rounded-lg p-4 from-blue-950 to-blue-900 w-full shadow-xl">
      <div className="text-white">
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
