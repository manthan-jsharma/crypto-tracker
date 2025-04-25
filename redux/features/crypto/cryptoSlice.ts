import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialCryptoData } from "@/data/initial-crypto-data";

export interface CryptoState {
  cryptos: Crypto[];
}

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  volume_24h: number;
  circulating_supply: number;
  max_supply: number | null;
  chart_data: number[];
}

const initialState: CryptoState = {
  cryptos: initialCryptoData,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCryptoPrice: (
      state,
      action: PayloadAction<{
        id: string;
        price: number;
        percent_change_1h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        volume_24h: number;
      }>
    ) => {
      const {
        id,
        price,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        volume_24h,
      } = action.payload;
      const cryptoIndex = state.cryptos.findIndex((crypto) => crypto.id === id);

      if (cryptoIndex !== -1) {
        state.cryptos[cryptoIndex].price = price;
        state.cryptos[cryptoIndex].percent_change_1h = percent_change_1h;
        state.cryptos[cryptoIndex].percent_change_24h = percent_change_24h;
        state.cryptos[cryptoIndex].percent_change_7d = percent_change_7d;
        state.cryptos[cryptoIndex].volume_24h = volume_24h;
      }
    },
  },
});

export const { updateCryptoPrice } = cryptoSlice.actions;

export default cryptoSlice.reducer;
