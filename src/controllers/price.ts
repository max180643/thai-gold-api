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

  const dateTime = $(PRICE_CONFIG.SELECTOR.UPDATE_DATETIME).text().trim();
  const goldBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BUY).text().trim();
  const goldSell = $(PRICE_CONFIG.SELECTOR.GOLD_SELL).text().trim();
  const goldBarBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_BUY).text().trim();
  const goldBarSell = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_SELL).text().trim();

  let updateDate = dateTime;
  let updateTime = dateTime;
  if (dateTime.includes(" เวลา ")) {
    const [d, t] = dateTime.split(" เวลา ");
    updateDate = d.trim();
    updateTime = "เวลา " + t.trim();
  }

  return {
    status: "success",
    response: {
      update_date: updateDate,
      update_time: updateTime,
      price: {
        gold: {
          buy: goldBuy,
          sell: goldSell,
        },
        gold_bar: {
          buy: goldBarBuy,
          sell: goldBarSell,
        },
      },
    },
  };
};

export default priceHandler;
