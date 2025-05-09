import "./App.css";
import SalesDashboard from "./components/SalesDashboard";
import WeatherForecast from "./components/WeatherForecast";
import DateTime from "./components/DateTime";
import CurrencyRate from "./components/CurrencyRate";
import StockPrice from "./components/StockPrice";
import CandlestickChart from "./components/CandlestickChart";

function App() {
  return (
    <div className="min-h-screen bg-black p-1">
      <div className="h-screen p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-full">
          {/* Left column - takes 2/3 width on medium screens and up */}
          <div className="md:col-span-2 flex flex-col gap-1 h-full">
            {/* Sales Dashboard */}
            <SalesDashboard />

            {/* Weather Forecast - with improved alignment */}
            <div className="flex-1 flex items-center justify-center">
              <WeatherForecast />
            </div>
          </div>

          {/* Right column - takes 1/3 width on medium screens and up */}
          <div className="flex flex-col gap-1 h-full">
            {/* Date & Time */}
            <DateTime />

            {/* Current Rate */}
            <CurrencyRate />

            {/* Current Stock Price */}
            <StockPrice />

            {/* Japan CFD */}
            <CandlestickChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
