export interface ITwentyFourHourTicker {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface ISymbolPairs {
  symbols: Array<{
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    baseCommissionPrecision: number;
    quoteCommissionPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQtyMarketAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: Array<{
      filterType: string;
      minPrice?: string;
      maxPrice?: string;
      tickSize?: string;
      multiplierUp?: string;
      multiplierDown?: string;
      avgPriceMins?: number;
      minQty?: string;
      maxQty?: string;
      stepSize?: string;
      minNotional?: string;
      applyToMarket?: boolean;
      limit?: number;
      maxNumOrders?: number;
      maxNumAlgoOrders?: number;
    }>;
  }>;
}

export interface IRecentTrades {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export interface ISymbolTicker {
  symbol: string;
  price: string;
}
