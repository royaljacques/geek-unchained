import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import path from 'path';
import cors from '@fastify/cors';
import { folder } from '../..';

const server = fastify();

server.register(cors);
console.log(folder)
server.register(require("@fastify/static"), {
    root: path.join(folder, 'src', 'assets'),
    prefix: '/public/assets/'
});

server.register(require("./../routes/games"))
server.register(require("./../routes/config"))


server.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`fastify Server listening at ${address}`);
});