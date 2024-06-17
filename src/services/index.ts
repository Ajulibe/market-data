import {
  IRecentTrades,
  ISymbolPairs,
  ISymbolTicker,
  ITwentyFourHourTicker,
} from "@/types";

import { customFetch } from "@/utils/customFetch";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function get24HourTicker(symbol: string): Promise<ITwentyFourHourTicker> {
  const url = `${BASE_URL}/api/v3/ticker/24hr?symbol=${symbol}`;
  return customFetch(url, "Failed to fetch 24-hour ticker data");
}

async function getRecentTrades(symbol: string): Promise<IRecentTrades[]> {
  const url = `${BASE_URL}/api/v3/trades?symbol=${symbol}`;
  return customFetch(url, "Failed to fetch recent trades");
}

async function getSymbolTicker(symbol: string): Promise<ISymbolTicker> {
  const url = `${BASE_URL}/api/v3/ticker/price?symbol=${symbol}`;
  return customFetch(url, "Failed to fetch symbol ticker");
}

export { get24HourTicker, getRecentTrades, getSymbolTicker };
