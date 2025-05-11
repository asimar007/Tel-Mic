import React from "react";
import { currencyData } from "../data/currencyData";
import type { Currency } from "../types/currency";

interface CurrencyRowProps {
  currency: Currency;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ currency }) => {
  return (
    <tr className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
      <td className=" flex items-center gap-2">
        <span className="text-4xl sm:text-5xl md:text-6xl mr-1">
          {currency.flag}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-cyan-400 font-semibold text-sm sm:text-base tracking-tight">
            {currency.code}
          </span>
          <span className="text-gray-300 text-xs sm:text-sm font-light">
            {currency.name}
          </span>
        </div>
      </td>
      <td className="p-2 text-yellow-300 text-center font-bold text-sm sm:text-base">
        {currency.bankBuysNotes.toFixed(2)}
      </td>
      <td className="p-2 text-green-400 text-center font-bold text-sm sm:text-base">
        {currency.bankBuysTC.toFixed(2)}
      </td>
    </tr>
  );
};

const CurrencyRate: React.FC = () => {
  return (
    <div className="border border-blue-900 bg-gray-950 text-white shadow-lg rounded-sm overflow-hidden w-full font-sans">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="p-2 text-left">
              <span className="text-cyan-400 font-medium text-sm sm:text-base tracking-wider">
                Currency
              </span>
            </th>
            <th className="p-2 text-right">
              <span className="text-yellow-300 font-semibold text-center block text-sm sm:text-base">
                Bank Buys
                <br />
                <span className="text-xs opacity-80">Notes</span>
              </span>
            </th>
            <th className="p-2 text-right">
              <span className="text-green-400 font-semibold text-center block text-sm sm:text-base">
                Bank Buys
                <br />
                <span className="text-xs opacity-80">TC</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {currencyData.map((currency) => (
            <CurrencyRow key={currency.code} currency={currency} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyRate;
