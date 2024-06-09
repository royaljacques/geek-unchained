import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import cors from '@fastify/cors';
import { readFileSync } from 'fs';

const server = fastify();

export const prisma = new PrismaClient();

async function create() {
  await prisma.games.create({
    data: {
      partyName: "JOURS III",
      winner: "null",
      chasseur: true,
      cupidon: true
    }
  });
}

console.log(__dirname);

server.register(require("@fastify/static"), {
  root: path.join(__dirname, 'src', 'assets'),
  prefix: '/public/assets/'
});

server.get('/public/json/*', async (req: FastifyRequest, reply: FastifyReply) => {
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

server.register(require("./src/routes/games/"));
server.register(cors, { /* put your options here */ });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
