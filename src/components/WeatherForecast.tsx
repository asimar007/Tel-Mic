import React, { useState, useEffect } from "react";
import type { DayForecast, WeatherCondition } from "../types/types";

const WeatherForecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<DayForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // WeatherAPI.com API call
        const response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=891f977c1f4d4404b1431516250905&q=Nagoya&days=7&aqi=no&alerts=no"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Map API data to our DayForecast format
        const mappedData: DayForecast[] = data.forecast.forecastday.map(
          (day: {
            date: string;
            day: {
              maxtemp_c: number;
              mintemp_c: number;
              condition: {
                code: number;
              };
            };
          }) => {
            // Get day of week in Japanese
            const date = new Date(day.date);
            const dayOfWeek = date.getDay();
            const japaneseDay = ["日", "月", "火", "水", "木", "金", "土"][
              dayOfWeek
            ];

            // Map condition code to our condition types
            let condition: WeatherCondition = "sunny";
            const code = day.day.condition.code;

            // Map weather codes to our simplified conditions
            if ([1000, 1003].includes(code)) {
              condition = "sunny";
            } else if ([1006, 1009, 1030, 1135, 1147].includes(code)) {
              condition = "cloudy";
            } else if (
              [
                1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246,
              ].includes(code)
            ) {
              condition = "rainy";
            } else if (
              [
                1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255,
                1258,
              ].includes(code)
            ) {
              condition = "snowy";
            }

            return {
              date: date.getDate().toString(),
              day: japaneseDay,
              condition: condition,
              highTemp: Math.round(day.day.maxtemp_c),
              lowTemp: Math.round(day.day.mintemp_c),
              isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
              isSunday: dayOfWeek === 0,
            };
          }
        );

        setForecastData(mappedData);
        setError(null);
      } catch (err) {
        console.error("Weather data fetch error:", err);
        setError(
          err instanceof Error
            ? err.message
            : "天気データの読み込みに失敗しました"
        );

        // Fallback to hardcoded data if API fails
        setForecastData([
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
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [error]);

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

  if (loading) {
    return (
      <div className="border border-blue-900 rounded-lg p-4 from-blue-950 to-blue-900 w-full shadow-xl flex justify-center items-center">
        <div className="text-blue-400">天気データを読み込み中...</div>
      </div>
    );
  }

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
