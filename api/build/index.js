"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("@fastify/cors"));
const websocket_1 = __importDefault(require("@fastify/websocket"));
const server = (0, fastify_1.default)({});
exports.prisma = new client_1.PrismaClient();
server.register(cors_1.default, { /* put your options here */});
server.register(require("@fastify/static"), {
    root: path_1.default.join(__dirname, 'src', 'assets'),
    prefix: '/public/assets/'
});
server.register(require("./src/routes/games/"));
server.register(require("./src/routes/ws/"));
server.register(websocket_1.default);
server.addHook('onReady', (done) => {
    console.log('Registered Routes:');
    console.log(server.printRoutes());
    done();
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
