import {FastifyInstance, FastifyPluginOptions, FastifyRequest } from "fastify";
import { prisma } from "../../..";
const cardIndex = require( "./../../config/cardsIndex.json")
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void>  {
    fastify.get('/games/cards', async (request: FastifyRequest, reply) => {
      const result = await prisma.games.findFirst({
        where: {
          id: 1
        }
      })
    
      return { data: result}
    });
    fastify.get('/games/cards/image', async (request: FastifyRequest, reply) => {
  

      return {data:
        {
          
        }
      }
    })

  }
  
  module.exports = routes