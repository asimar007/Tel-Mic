import React, { useEffect, useRef, memo } from "react";

const CandlestickChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (scriptRef.current || !container.current) return;

    const script = document.createElement("script");
    scriptRef.current = script;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["WHSELFINVEST:JAPAN225CFD|1M|JPY"]],
      chartOnly: false,
      width: "100%",
      height: "100%",
      locale: "ja",
      colorTheme: "light",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "candlesticks",
      upColor: "#22ab94",
      downColor: "#f7525f",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
      dateRanges: ["1d|1", "1w|15", "1m|30"],
    });

    container.current.appendChild(script);

    return () => {
      if (container.current && scriptRef.current) {
        container.current.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div className="border border-blue-900 rounded-lg p-1 flex flex-col flex-grow h-[250px] md:h-[300px] lg:h-[350px]">
      <div
        className="tradingview-widget-container w-full h-full"
        ref={container}
      >
        <div className="tradingview-widget-container__widget h-full"></div>
      </div>
    </div>
  );
};

export default memo(CandlestickChart);
