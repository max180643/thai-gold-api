/* eslint-disable import/no-extraneous-dependencies */
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";
import PRICE_CONFIG from "../config/price";

const cacheSys = new CacheContainer(new MemoryStorage());

const priceHandler = async () => {
  const response = await fetch(PRICE_CONFIG.URL, { method: "GET" });
  const statusCode = response.status;
  const body = await response.text();

  const cachedGold = await cacheSys.getItem("goldCache");

  if (statusCode !== 200) {
    if (cachedGold) {
      return {
        status: "cached",
        response: cachedGold,
      };
    }

    return {
      status: "failure",
      response: "Service is unavailable, Please try again later.",
    };
  }

  const $ = cheerio.load(body);

  const date = $(PRICE_CONFIG.SELECTOR.DATE).text().trim();
  // removed "เวลา" from api
  const updateTime = $(PRICE_CONFIG.SELECTOR.UPDATE_TIME)
    .text()
    .trim()
    .split(" ")
    .slice(1, 3)
    .join(" ");
  // get number that in .match, if not founded it pretending "1"
  const updateRound = ($(PRICE_CONFIG.SELECTOR.UPDATE_ROUND)
    .text()
    .trim()
    .match(/\d+/) || [1])[0];
  const goldPure = $(PRICE_CONFIG.SELECTOR.GOLD_PURE).text().trim();
  const goldBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BUY).text().trim();
  const goldSell = $(PRICE_CONFIG.SELECTOR.GOLD_SELL).text().trim();
  const goldBarBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_BUY).text().trim();
  const goldSellBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_SELL).text().trim();
  const priceComparePrevious = $(PRICE_CONFIG.SELECTOR.PRICE_COMPARE_PREVIOUS)
    .text()
    .trim();
  const priceCompareYesterday = $(PRICE_CONFIG.SELECTOR.PRICE_COMPARE_YESTERDAY)
    .text()
    .trim()
    .substring(7);

  const formatPriceComparePrevious =
    priceComparePrevious.charAt(0) === "-"
      ? priceComparePrevious
      : `+${priceComparePrevious}`;
  const formatPriceCompareYesterday =
    priceCompareYesterday.charAt(0) === "-"
      ? priceCompareYesterday
      : `+${priceCompareYesterday}`;

  const finalResponse = {
    date,
    update: {
      round: updateRound,
      time: updateTime,
    },
    gold_pure: goldPure,
    price: {
      gold: {
        buy: goldBuy,
        sell: goldSell,
      },
      gold_bar: {
        buy: goldBarBuy,
        sell: goldSellBuy,
      },
      change: {
        compare_previous: formatPriceComparePrevious,
        compare_yesterday: formatPriceCompareYesterday,
      },
    },
  };

  await cacheSys.setItem("goldCache", finalResponse, { ttl: 3600 });

  return {
    status: "success",
    response: finalResponse,
  };
};

export default priceHandler;
