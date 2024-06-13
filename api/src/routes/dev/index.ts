import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../..";
import path from "path";
import { readFileSync } from "fs";
const cardIndex = require("./../../config/cardsIndex.json")
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {
    fastify.get("/dev/routes", async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send(fastify.printRoutes())
    })
}

module.exports = routes