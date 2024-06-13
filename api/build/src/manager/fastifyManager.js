"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("@fastify/cors"));
const __1 = require("../..");
const server = (0, fastify_1.default)();
server.register(cors_1.default);
console.log(__1.folder);
server.register(require("@fastify/static"), {
    root: path_1.default.join(__1.folder, 'src', 'assets'),
    prefix: '/public/assets/'
});
server.register(require("./../routes/games"));
server.register(require("./../routes/config"));
server.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`fastify Server listening at ${address}`);
});
