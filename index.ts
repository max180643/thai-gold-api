import { FastifyServerOptions } from "fastify";
import buildApp from "./src/app";
import CONFIG from "./src/config";

const options: FastifyServerOptions = {
  logger: true,
};

const app = buildApp(options);

app.listen(CONFIG.PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Server running at port %d.", CONFIG.PORT);
});
