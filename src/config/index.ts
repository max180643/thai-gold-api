import * as dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 3000,
};

export default CONFIG;
