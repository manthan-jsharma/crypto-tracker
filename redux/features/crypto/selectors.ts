import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Base selector to get the crypto state
const selectCryptoState = (state: RootState) => state.crypto;

// Selector to get all cryptos
export const selectAllCryptos = createSelector(
  [selectCryptoState],
  (cryptoState) => cryptoState.cryptos
);

// Selector to get a specific crypto by id
export const selectCryptoById = createSelector(
  [selectAllCryptos, (_, cryptoId) => cryptoId],
  (cryptos, cryptoId) => cryptos.find((crypto) => crypto.id === cryptoId)
);
