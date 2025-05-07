import React from "react";

interface TemperatureDisplayProps {
  high: number;
  low: number;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({ high, low }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-red-500">{high}</div>
      <div className="text-blue-500">{low}</div>
    </div>
  );
};

export default TemperatureDisplay;