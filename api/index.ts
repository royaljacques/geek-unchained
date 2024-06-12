import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import cors from '@fastify/cors';
import websocketPlugin from '@fastify/websocket';

const server = fastify({

});

export const prisma = new PrismaClient();


server.register(cors, { /* put your options here */ });
server.register(require("@fastify/static"), {
  root: path.join(__dirname, 'src', 'assets'),
  prefix: '/public/assets/'
});
server.register(require("./src/routes/games/"));
server.register(require("./src/routes/ws/"));
server.register(websocketPlugin)
server.addHook('onReady', (done) => {
  console.log('Registered Routes:');
  console.log(server.printRoutes())
  done();
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
