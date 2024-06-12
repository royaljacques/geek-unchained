import {FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../..";
import path from "path";
import { readFileSync } from "fs";
const cardIndex = require( "./../../config/cardsIndex.json")
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void>  {
    fastify.get('/games/cards', async (request: FastifyRequest, reply) => {
      const result = await prisma.games.findFirst({
        where: {
          id: 1
        }
      })
      if(result != null){
        const { partyName, id,winner, ...filteredResult } = result;

        return { data: filteredResult}
      }      
    });
    fastify.get('/games/json/*', async (req: FastifyRequest, reply: FastifyReply) => {
      const params = req.params as { '*': string }; // Spécifie le type des paramètres
      const filePath = path.join(__dirname, 'src', 'config', params['*']);
      const bufferIndexHtml = readFileSync(filePath)
      reply.type('text/json').send(bufferIndexHtml)
      try {
        await reply.type('text/html').send(bufferIndexHtml);
      } catch (error) {
        console.error(error);
        reply.code(500).send('Internal Server Error');
      }
    });
    fastify.get("/dev/routes" ,async (req: FastifyRequest, reply: FastifyReply) => {
      reply.send(fastify.printRoutes())
     })
  }
  
  module.exports = routes