import * as dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 3000,
  TRACK_API_URL: process.env.TRACK_API_URL || "",
  UMAMI_WEBSITE_NAME: process.env.UMAMI_WEBSITE_NAME || "",
  UMAMI_WEBSITE_DOMAIN: process.env.UMAMI_WEBSITE_DOMAIN || "",
};

export default CONFIG;
