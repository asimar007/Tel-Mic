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
      <Card className="w-full h-full bg-gradient-to-br from-[#0a1525] to-[#0d1e36] text-white border-0 shadow-2xl overflow-hidden rounded-xl">
        <div className="h-full flex flex-col p-4 space-y-4">
          {/* Header with icon and title */}
          <div className="flex items-center gap-2">
            <div className="text-cyan-400 bg-[#0d2a47] p-2 rounded-lg shadow-lg">
              <BarChartIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
            <div>
              <h2 className="text-fluid-lg font-medium text-cyan-400 tracking-wide">
                当月売上合計
              </h2>
              <p className="text-fluid-sm text-cyan-200/70">
                Monthly Sales Total
              </p>
            </div>
          </div>

          {/* Main metrics */}
          <div className="flex items-end justify-between">
            <div className="flex items-baseline">
              <span className="text-white text-fluid-lg mr-1">¥</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-fluid-3xl font-bold tracking-tighter">
                272,925,484
              </span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center">
                <TrendingUpIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-400 mr-1" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-fluid-3xl font-bold">
                  49 %
                </span>
              </div>
              <span className="text-cyan-200 text-fluid-base">達成率</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-4 md:h-5 lg:h-6 bg-[#0d2a47] rounded-lg overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={progressBar}
            />
          </div>

          {/* Regional/Department breakdown */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-2">
            {/* Left column */}
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <RegionalMetric name="本社" value="2,925,484" percentage="49" />
              <RegionalMetric name="常滑" value="2,925,484" percentage="49" />
              <RegionalMetric name="知立" value="2,925,484" percentage="49" />
              <RegionalMetric
                name="博多"
                value="2,925,484"
                percentage="49"
                className="mb-2"
              />
            </div>

            {/* Right column */}
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <RegionalMetric name="島根" value="2,925,484" percentage="49" />
              <RegionalMetric name="東京" value="2,925,484" percentage="49" />
              <RegionalMetric name="名古屋" value="2,925,484" percentage="49" />
              <RegionalMetric
                name="CRM"
                value="272,925,484"
                percentage="49"
                prefix="¥"
                highlight={true}
                className="mb-2"
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
      } rounded-lg hover:bg-[#0f3156] transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
        <div
          className={`w-1 h-6 md:h-8 lg:h-10 ${
            highlight
              ? "bg-gradient-to-b from-cyan-400 to-blue-500"
              : "bg-cyan-400"
          } rounded-full`}
        ></div>
        <div className="flex flex-col">
          <span className="text-white font-medium text-fluid-base">{name}</span>
          <span
            className={`${
              highlight
                ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                : "text-cyan-400"
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
              ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              : "text-cyan-400"
          } font-bold text-fluid-lg`}
        >
          {percentage} %
        </span>
        <span className="text-cyan-200 text-fluid-sm mt-0.5">達成率</span>
      </div>
    </div>
  );
}
