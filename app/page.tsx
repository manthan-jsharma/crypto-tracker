import CryptoTable from "@/components/crypto-table";
import { ReduxProvider } from "@/redux/provider";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Crypto Price Tracker</h1>
      <ReduxProvider>
        <CryptoTable />
      </ReduxProvider>
    </main>
  );
}
