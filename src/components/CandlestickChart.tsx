import React from "react";

const CandlestickChart: React.FC = () => {
  return (
    <div className="border border-blue-500 rounded-lg p-3 flex-grow flex items-center justify-center">
      <div className="text-white w-full">
        <h2 className="text-xl font-bold mb-2">
          JAPAN CFD (Candlestick Charts)
        </h2>
        <div className="flex justify-center items-end space-x-2 h-20">
          <div className="w-6 bg-green-500 h-12 relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-green-500"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-green-500"></div>
          </div>
          <div className="w-6 bg-red-500 h-8 relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-red-500"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-red-500"></div>
          </div>
          <div className="w-6 bg-green-500 h-10 relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-green-500"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-green-500"></div>
          </div>
          <div className="w-6 bg-red-500 h-6 relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-red-500"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-red-500"></div>
          </div>
          <div className="w-6 bg-green-500 h-14 relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-green-500"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandlestickChart;
