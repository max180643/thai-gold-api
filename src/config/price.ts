const PRICE_CONFIG = {
  URL: "https://xn--42cah7d0cxcvbbb9x.com/",
  SELECTOR: {
    DATE: "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(5) > td.span.bg-span.txtd.al-r",
    UPDATE_TIME:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(5) > td.em.bg-span.txtd.al-r",
    GOLD_BUY:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(3) > td:nth-child(3)",
    GOLD_SELL:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(3) > td:nth-child(2)",
    GOLD_BAR_BUY:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(2) > td:nth-child(3)",
    GOLD_BAR_SELL:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(2) > td:nth-child(2)",
    PRICE_COMPARE_PREVIOUS:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(4) > td:nth-child(3)",
    PRICE_COMPARE_YESTERDAY:
      "#rightCol > div.divgta.goldshopf > table > tbody > tr:nth-child(4) > td:nth-child(1)",
  },
};

export default PRICE_CONFIG;
