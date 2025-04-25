Crypto Price Tracker

A responsive React application that tracks real-time crypto prices using Redux Toolkit for state management.

Features

- Real-time updates: Simulates WebSocket updates using setInterval and mocked data.
- Responsive table: Displays crypto asset data in a responsive table with color-coded percentage changes.
- Redux state management: Uses Redux Toolkit to store and manage all asset data.

Tech Stack

- Frontend: React
- State Management: Redux Toolkit
- Styling: CSS

## Getting Started

1. Clone the repository: git clone https://github.com/your-username/crypto-price-tracker.git
2. Install dependencies: npm install
3. Start the application: npm start

Usage
The application displays a table with 5 crypto assets, including their logo, name, symbol, price, and other relevant data. The table is updated in real-time using simulated WebSocket updates.

Redux State Structure
The Redux state is structured as follows:

{
"assets": [
{
"id": 1,
"name": "Bitcoin",
"symbol": "BTC",
"price": 1000,
"percentChange1h": 0.5,
"percentChange24h": 1.2,
"percentChange7d": 2.5,
"marketCap": 1000000,
"volume24h": 500000,
"circulatingSupply": 10000000,
"maxSupply": 21000000
},
// ... other assets
]
}
