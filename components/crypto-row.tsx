import Image from "next/image";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import PriceChange from "./price-change";
import MiniChart from "./mini-chart";
import type { Crypto } from "@/redux/features/crypto/cryptoSlice";

interface CryptoRowProps {
  crypto: Crypto;
  index: number;
}

export default function CryptoRow({ crypto, index }: CryptoRowProps) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
      <td className="p-3">{index + 1}</td>
      <td className="p-3">
        <div className="w-8 h-8 relative">
          <Image
            src={crypto.image || "/placeholder.svg"}
            alt={crypto.name}
            fill
            className="object-contain"
          />
        </div>
      </td>
      <td className="p-3 font-medium">{crypto.name}</td>
      <td className="p-3 text-gray-500">{crypto.symbol.toUpperCase()}</td>
      <td className="p-3 text-right">{formatCurrency(crypto.price)}</td>
      <td className="p-3 text-right">
        <PriceChange value={crypto.percent_change_1h} />
      </td>
      <td className="p-3 text-right">
        <PriceChange value={crypto.percent_change_24h} />
      </td>
      <td className="p-3 text-right">
        <PriceChange value={crypto.percent_change_7d} />
      </td>
      <td className="p-3 text-right">{formatCurrency(crypto.market_cap)}</td>
      <td className="p-3 text-right">{formatCurrency(crypto.volume_24h)}</td>
      <td className="p-3 text-right">
        {formatNumber(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}
      </td>
      <td className="p-3 text-right">
        {crypto.max_supply ? formatNumber(crypto.max_supply) : "∞"}{" "}
        {crypto.symbol.toUpperCase()}
      </td>
      <td className="p-3">
        <div className="flex justify-center">
          <MiniChart
            data={crypto.chart_data}
            priceChange={crypto.percent_change_7d}
          />
        </div>
      </td>
    </tr>
  );
}
