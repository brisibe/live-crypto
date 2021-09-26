import axios from "axios";

let url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";
export function getCryptData() {
  return axios.get(url);
}

export function getCryptoDataPrices({ id }) {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`
  );
}
