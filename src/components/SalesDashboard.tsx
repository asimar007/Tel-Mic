"use client";

import { Card } from "@/components/ui/card";
import { BarChartIcon, TrendingUpIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function SalesDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const progressBar: Variants = {
    hidden: { width: "0%" },
    visible: {
      width: "49%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-full h-full p-1">
      <Card className="w-full h-full bg-black text-white border-1 shadow-2xl overflow-hidden rounded-sm">
        <div className="h-full flex flex-col p-1 space-y-2">
          {/* Header with icon and title */}
          <div className="flex items-center gap-2">
            <div className="text-cyan-400 bg-[#0d2a47] p-2 rounded-lg shadow-lg">
              <BarChartIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-cyan-300" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 tracking-wide">
                当月売上合計
              </h2>
            </div>
          </div>

          {/* Main metrics */}
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="flex items-baseline gap-1">
              <span className="text-cyan-100 text-xl md:text-2xl lg:text-3xl">
                ¥
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                272,925,484
              </span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-emerald-400" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 text-3xl md:text-4xl lg:text-5xl font-bold">
                  49%
                </span>
              </div>
              <span className="text-cyan-100 text-base md:text-lg lg:text-xl">
                達成率
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-4 md:h-6 lg:h-8 bg-[#0d2a47] rounded-lg overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={progressBar}
            />
          </div>

          {/* Regional/Department breakdown */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-2">
            {/* Left column */}
            <div className="flex flex-col space-y-3 md:space-y-4 lg:space-y-5 h-full">
              <RegionalMetric
                name="本社"
                value="2,925,484"
                percentage="49"
                className="flex-1"
              />
              <RegionalMetric
                name="常滑"
                value="2,925,484"
                percentage="49"
                className="flex-1"
              />
              <RegionalMetric
                name="知立"
                value="2,925,484"
                percentage="49"
                className="flex-1"
              />
              <RegionalMetric
                name="博多"
                value="2,925,484"
                percentage="49"
                className="flex-1 mb-2"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col space-y-3 md:space-y-4 lg:space-y-5 h-full">
              <RegionalMetric
                name="島根"
                value="2,925,484"
                percentage="49"
                className="flex-1"
              />
              <RegionalMetric
                name="東京"
                value="2,925,484"
                percentage="49"
                className="flex-1"
              />
              <RegionalMetric
                name="名古屋"
                value="2,925,484"
                percentage="49"
                className="flex-1"
              />
              <RegionalMetric
                name="CRM"
                value="272,925,484"
                percentage="49"
                prefix="¥"
                highlight={true}
                className="flex-1 mb-2"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function RegionalMetric({
  name,
  value,
  percentage,
  prefix = "",
  highlight = false,
  className = "",
}: {
  name: string;
  value: string;
  percentage: string;
  prefix?: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex justify-between items-center p-2 md:p-3 lg:p-4 ${
        highlight
          ? "bg-gradient-to-r from-[#0d2a47] to-[#0f3156]"
          : "bg-[#0d2a47]"
      } rounded-lg hover:bg-[#0f3156] transition-all duration-300 h-full ${className}`}
    >
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
        <div
          className={`w-1 h-6 md:h-8 lg:h-10 ${
            highlight
              ? "bg-gradient-to-b from-emerald-400 to-cyan-500"
              : "bg-cyan-300"
          } rounded-full`}
        ></div>
        <div className="flex flex-col">
          <span className="text-cyan-50 font-medium text-fluid-base">
            {name}
          </span>
          <span
            className={`${
              highlight
                ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400"
                : "text-cyan-300"
            } font-bold text-fluid-sm`}
          >
            {prefix}
            {value}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span
          className={`${
            highlight
              ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400"
              : "text-cyan-300"
          } font-bold text-fluid-lg`}
        >
          {percentage} %
        </span>
        <span className="text-cyan-100 text-fluid-sm mt-0.5">達成率</span>
      </div>
    </div>
  );
}
