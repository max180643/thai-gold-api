import fetch from "node-fetch";
import * as cheerio from "cheerio";
import PRICE_CONFIG from "../config/price";

const priceHandler = async () => {
  const response = await fetch(PRICE_CONFIG.URL, { method: "GET" });
  const statusCode = response.status;
  const body = await response.text();

  if (statusCode !== 200) {
    return {
      status: "failure",
      response: "Service is unavailable, Please try again later.",
    };
  }

  const $ = cheerio.load(body);

  const date = $(PRICE_CONFIG.SELECTOR.DATE).text().trim();
  const updateTime = $(PRICE_CONFIG.SELECTOR.UPDATE_TIME).text().trim();
  const goldBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BUY).text().trim();
  const goldSell = $(PRICE_CONFIG.SELECTOR.GOLD_SELL).text().trim();
  const goldBarBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_BUY).text().trim();
  const goldSellBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_SELL).text().trim();
  const goldPriceChange = $(PRICE_CONFIG.SELECTOR.GOLD_PRICE_CHANGE)
    .text()
    .trim();

  return {
    status: "success",
    response: {
      date,
      update_time: updateTime,
      price: {
        gold: {
          buy: goldBuy,
          sell: goldSell,
        },
        gold_bar: {
          buy: goldBarBuy,
          sell: goldSellBuy,
        },
        change: goldPriceChange,
      },
    },
  };
};

export default priceHandler;
