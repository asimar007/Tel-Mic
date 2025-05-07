import React from "react";
import { currencyData } from "../data/currencyData";
import type { Currency } from "../types/currency";

interface CurrencyRowProps {
  currency: Currency;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ currency }) => {
  return (
    <tr className="border-b border-gray-800">
      <td className="p-2 flex items-center gap-2">
        <span className="text-6xl mr-1">{currency.flag}</span>
        <span className="text-cyan-400 font-medium">{currency.code}</span>
        <span className="text-white text-sm ml-4">{currency.name}</span>
      </td>
      <td className="p-2 text-yellow-300 text-center font-semibold">
        {currency.bankBuysNotes.toFixed(2)}
      </td>
      <td className="p-2 text-green-400 text-center font-semibold">
        {currency.bankBuysTC.toFixed(2)}
      </td>
    </tr>
  );
};

const CurrencyRate: React.FC = () => {
  return (
    <div className="border-1 bg-black text-white shadow-lg rounded-sm overflow-hidden max-w-lg">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="p-2 text-left">
              <span className="text-cyan-400 font-medium">Currency</span>
            </th>
            <th className="p-2 text-right">
              <span className="text-yellow-300 font-medium text-center block">
                Bank Buys
                <br />
                Notes
              </span>
            </th>
            <th className="p-2 text-right">
              <span className="text-green-400 font-medium text-center block">
                Bank Buys
                <br />
                TC
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
