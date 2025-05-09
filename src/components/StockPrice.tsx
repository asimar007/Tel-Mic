import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface NikkeiTickerProps {
  currentValue: number;
  change: number;
}

const StockPrice: React.FC = () => {
  const [stockData, setStockData] = useState({
    currentValue: 0,
    change: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/%5EN225",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "b93e24c615msh86475aef4d4ff55p1d1c99jsn227c09d9038f",
              "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Log the entire response for debugging
        console.log("Full API Response:", result);

        // Check if result is an object with a body property
        if (
          result &&
          result.body &&
          Array.isArray(result.body) &&
          result.body.length > 0
        ) {
          const stockInfo = result.body[0];

          // Extract and validate the required values
          const currentValue = parseFloat(stockInfo.regularMarketPrice);
          const change = parseFloat(stockInfo.regularMarketChange);

          if (!isNaN(currentValue) && !isNaN(change)) {
            setStockData({
              currentValue,
              change,
            });
            setError(null);
          } else {
            throw new Error("Invalid market data received");
          }
        } else {
          throw new Error("Unexpected API response structure");
        }
      } catch (err) {
        console.error("Stock data fetch error:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load stock data"
        );
        // Keep the previous data if available
        setStockData((prevData) =>
          prevData.currentValue === 0
            ? {
                currentValue: 36863.15, // Fallback value
                change: 83.48828, // Fallback value
              }
            : prevData
        );
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchStockData();

    // Set up polling every 5 minutes (300000ms)
    const intervalId = setInterval(fetchStockData, 300000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-sm p-4 flex justify-center items-center h-32">
        <div className="text-blue-400">Loading stock data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-sm p-4 flex justify-center items-center h-32">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <NikkeiTicker
      currentValue={stockData.currentValue}
      change={stockData.change}
    />
  );
};

function NikkeiTicker({ currentValue, change }: NikkeiTickerProps) {
  const formattedCurrentValue = currentValue.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedChange = change.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "never",
  });

  const percentChange = ((change / (currentValue - change)) * 100).toFixed(2);

  const isNegative = change < 0;
  const isPositive = change > 0;

  // Replace the text direction icon with Lucide components
  const DirectionIcon = isPositive
    ? TrendingUp
    : isNegative
    ? TrendingDown
    : ArrowRight;

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-gray-900 to-black rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-500/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-black flex justify-between items-center border-b border-blue-500/30">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-sm sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            日経平均株価
          </span>
        </div>
        <span className="text-sm sm:text-base md:text-lg text-blue-200">
          Nikkei 225
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col divide-y divide-blue-900/50">
        {/* Current Value */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white flex justify-between items-center p-1 sm:p-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-white">
              現在値
            </span>
            <span className="text-xs sm:text-sm text-white">Current</span>
          </div>
          <motion.span
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            {formattedCurrentValue}
          </motion.span>
        </motion.div>

        {/* Change */}
        <motion.div
          className={`flex justify-between items-center p-1 sm:p-4 ${
            isPositive
              ? "bg-gradient-to-r from-green-600 to-green-500"
              : isNegative
              ? "bg-gradient-to-r from-red-600 to-red-500"
              : "bg-gradient-to-r from-gray-600 to-gray-500"
          }`}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-white">
              前日比
            </span>
            <span className="text-xs sm:text-sm text-white/80">Change</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mr-1">
                {isNegative && "-"}
                {formattedChange}
              </span>
              <DirectionIcon className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
            </div>
            <span className="text-sm text-white/80">
              {isNegative && ""}
              {percentChange}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default StockPrice;
