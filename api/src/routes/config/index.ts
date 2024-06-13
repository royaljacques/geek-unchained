import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { folder, prisma } from "../../..";
import path from "path";
import { readFileSync } from "fs";

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {
    fastify.get('/config/json/*', async (req: FastifyRequest, reply: FastifyReply) => {
        const params = req.params as { '*': string };
        const filePath = path.join(folder, 'src', 'config', params['*']);
        try {
            const bufferIndexHtml = readFileSync(filePath, 'utf-8');
            reply.type('application/json').send(bufferIndexHtml);
        } catch (error) {
            console.error(error);
            reply.code(500).send('Internal Server Error');
        }
    });
}
module.exports = routes