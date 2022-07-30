import fetch from "node-fetch";
import fastifyPlugin from "fastify-plugin";
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import CONFIG from "../config";

const asyncTrack: FastifyPluginAsync = async (fastify, options) => {
  if (CONFIG.TRACK_API_URL) {
    fastify.addHook(
      "onRequest",
      async (request: FastifyRequest, reply: FastifyReply) => {
        const { ip, url, headers } = request;
        const userAgent = headers["user-agent"];
        fetch(`${CONFIG.TRACK_API_URL}/track`, {
          method: "POST",
          body: JSON.stringify({
            websiteName: CONFIG.UMAMI_WEBSITE_NAME,
            hostname: CONFIG.UMAMI_WEBSITE_DOMAIN,
            ip,
            userAgent,
            url,
          }),
        });
      }
    );
  }
};
const track = fastifyPlugin(asyncTrack);

export default track;
