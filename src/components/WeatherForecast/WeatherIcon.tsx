import React from "react";
import type { WeatherCondition } from "./types";

interface WeatherIconProps {
  condition: WeatherCondition;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  const getIcon = () => {
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
  };

  return <div className="text-2xl my-1">{getIcon()}</div>;
};

export default WeatherIcon;
