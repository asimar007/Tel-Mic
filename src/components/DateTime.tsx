import React, { useState, useEffect } from "react";

const DateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const japanTime = date.toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    return japanTime.replace(/\//g, "-");
  };

  return (
    <div className=" rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-3xl font-bold text-white tracking-wider">
          {formatDate(currentDateTime)}
        </div>
      </div>
    </div>
  );
};

export default DateTime;
