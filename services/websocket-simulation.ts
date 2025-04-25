import { updateCryptoPrice } from "@/redux/features/crypto/cryptoSlice";
import { store } from "@/redux/store";
import type { Dispatch } from "@reduxjs/toolkit";

let intervalId: NodeJS.Timeout | null = null;

// Function to generate random price changes
function generateRandomPriceChange(currentPrice: number): number {
  // Generate a random percentage change between -2% and +2%
  const percentChange = (Math.random() * 4 - 2) / 100;
  return currentPrice * (1 + percentChange);
}

// Function to generate random percentage changes
function generateRandomPercentChange(currentPercent: number): number {
  // Generate a random change between -0.5% and +0.5%
  const change = Math.random() * 1 - 0.5;
  return currentPercent + change;
}

// Function to generate random volume changes
function generateRandomVolumeChange(currentVolume: number): number {
  // Generate a random percentage change between -5% and +5%
  const percentChange = (Math.random() * 10 - 5) / 100;
  return currentVolume * (1 + percentChange);
}

// Start the WebSocket simulation
export function startWebSocketSimulation(dispatch: Dispatch) {
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    // Get current state
    const { cryptos } = store.getState().crypto;

    // Randomly select a crypto to update (or update all with a small probability)
    const updateAll = Math.random() < 0.2;

    if (updateAll) {
      // Update all cryptos
      cryptos.forEach((crypto) => {
        dispatch(
          updateCryptoPrice({
            id: crypto.id,
            price: generateRandomPriceChange(crypto.price),
            percent_change_1h: generateRandomPercentChange(
              crypto.percent_change_1h
            ),
            percent_change_24h: generateRandomPercentChange(
              crypto.percent_change_24h
            ),
            percent_change_7d: generateRandomPercentChange(
              crypto.percent_change_7d
            ),
            volume_24h: generateRandomVolumeChange(crypto.volume_24h),
          })
        );
      });
    } else {
      // Update a random crypto
      const randomIndex = Math.floor(Math.random() * cryptos.length);
      const cryptoToUpdate = cryptos[randomIndex];

      dispatch(
        updateCryptoPrice({
          id: cryptoToUpdate.id,
          price: generateRandomPriceChange(cryptoToUpdate.price),
          percent_change_1h: generateRandomPercentChange(
            cryptoToUpdate.percent_change_1h
          ),
          percent_change_24h: generateRandomPercentChange(
            cryptoToUpdate.percent_change_24h
          ),
          percent_change_7d: generateRandomPercentChange(
            cryptoToUpdate.percent_change_7d
          ),
          volume_24h: generateRandomVolumeChange(cryptoToUpdate.volume_24h),
        })
      );
    }
  }, 1500); // Update every 1.5 seconds
}

// Stop the WebSocket simulation
export function stopWebSocketSimulation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
