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
        const fwdIp = headers["x-forwarded-for"];
        const userAgent = headers["user-agent"];
        let realIp: string;

        if (fwdIp) {
          const list = (<string>fwdIp).split(",");
          realIp = list[list.length - 1];
        } else {
          realIp = ip;
        }

        fetch(`${CONFIG.TRACK_API_URL}/track`, {
          method: "POST",
          body: JSON.stringify({
            websiteName: CONFIG.UMAMI_WEBSITE_NAME,
            hostname: CONFIG.UMAMI_WEBSITE_DOMAIN,
            ip: realIp,
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
