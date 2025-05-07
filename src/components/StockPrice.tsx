import React from "react";

const StockPrice: React.FC = () => {
  return (
    <div className="border border-blue-500 rounded-lg p-3 flex-grow flex items-center justify-center">
      <div className="text-white w-full">
        <h2 className="text-xl font-bold mb-2">
          Current Stock Price Rate
        </h2>
        <p className="flex justify-between">
          <span>NIKKEI:</span>{" "}
          <span className="text-green-500">38,500.21 (+1.2%)</span>
        </p>
        <p className="flex justify-between">
          <span>TOPIX:</span>{" "}
          <span className="text-green-500">2,654.93 (+0.8%)</span>
        </p>
      </div>
    </div>
  );
};

export default StockPrice;