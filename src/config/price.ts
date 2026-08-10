const PRICE_CONFIG = {
  URL: "https://classic.goldtraders.or.th/default.aspx",
  SELECTOR: {
    UPDATE_DATETIME: "#DetailPlace_uc_goldprices1_lblAsTime > b > font",
    GOLD_BUY: "#DetailPlace_uc_goldprices1_lblOMBuy > b > font",
    GOLD_SELL: "#DetailPlace_uc_goldprices1_lblOMSell > b > font",
    GOLD_BAR_BUY: "#DetailPlace_uc_goldprices1_lblBLBuy > b > font",
    GOLD_BAR_SELL: "#DetailPlace_uc_goldprices1_lblBLSell > b > font",
  },
};

export default PRICE_CONFIG;
