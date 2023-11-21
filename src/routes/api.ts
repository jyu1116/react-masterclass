import { start } from "repl";

const BASE_URL = `https://api.coinpaprika.com/v1`;

/* 코인 목록 전체 */
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

/* coinId에 해당하는 기본정보 */
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

/* coinId에 해당하는 가격정보 */
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

/* chart : 유료버전 Coinpaprika API 
export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
*/

/* char : 무료버전 nico API */
export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
