import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../..";
import path from "path";
import { readFileSync } from "fs";
const cardIndex = require("./../../config/cardsIndex.json")
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {
    fastify.get('/games/cards', async (request: FastifyRequest, reply) => {
        const result = await prisma.games.findFirst({
            where: {
                id: 1
            }
        })
        if (result != null) {
            const { partyName, id, winner, ...filteredResult } = result;

            return { data: filteredResult }
        }
    });
}

module.exports = routes