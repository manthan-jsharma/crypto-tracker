"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCryptos } from "@/redux/features/crypto/selectors";
import {
  startWebSocketSimulation,
  stopWebSocketSimulation,
} from "@/services/websocket-simulation";
import CryptoRow from "./crypto-row";

export default function CryptoTable() {
  const dispatch = useDispatch();
  const cryptos = useSelector(selectAllCryptos);

  useEffect(() => {
    // Start the WebSocket simulation when component mounts
    startWebSocketSimulation(dispatch);

    // Clean up the interval when component unmounts
    return () => {
      stopWebSocketSimulation();
    };
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Logo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Symbol</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-right">1h %</th>
            <th className="p-3 text-right">24h %</th>
            <th className="p-3 text-right">7d %</th>
            <th className="p-3 text-right">Market Cap</th>
            <th className="p-3 text-right">24h Volume</th>
            <th className="p-3 text-right">Circulating Supply</th>
            <th className="p-3 text-right">Max Supply</th>
            <th className="p-3 text-center">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <CryptoRow key={crypto.id} crypto={crypto} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
