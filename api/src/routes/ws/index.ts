import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../..'; // Ajuster l'import selon votre structure de projet
import cardIndex from './../../config/cardsIndex.json';
import { WebSocket } from 'ws';

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {
 fastify.get("/websocket",{websocket: true} , (connection: {socket: WebSocket} , req: FastifyRequest) => {
    const {socket} = connection;
    socket.on('message', message => {
        if(message.toString() === "ping"){
            return socket.send("pong")
        }
        // message.toString() === 'hi from client'
        socket.send('hi from server')
      })
      socket.send("hi")
})
}

export default routes;
