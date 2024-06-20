import fastify, {
  FastifyServerOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from "@fastify/cors";
import priceRouters from "./routers/price";
import track from "./plugins/track";

const buildApp = (options: FastifyServerOptions) => {
  const app = fastify(options);

  app.register(cors, {
    origin: "*",
  });

  app.register(track, {});

  app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).send({
      status: "success",
      response: {
        folked: "PlutoPon",
        docs: "https://github.com/PonlawatP/thai-gold-api for API usage.",
        docs_n_credit: "https://github.com/max180643/thai-gold-api",
      },
    });
  });

  app.register(priceRouters, { prefix: "/" });

  app.get("*", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.code(404).send({
      status: "failure",
      response: "route not found.",
    });
  });

  return app;
};

export default buildApp;
