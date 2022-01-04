import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import priceHandler from "../controllers/price";

const priceRouters = async (app: FastifyInstance) => {
  app.get("/latest", async (request: FastifyRequest, reply: FastifyReply) => {
    const data = await priceHandler();

    reply.code(200).send({
      status: data.status,
      response: data.response,
    });
  });
};

export default priceRouters;
