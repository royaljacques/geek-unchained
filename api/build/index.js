"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fs_1 = require("fs");
const server = (0, fastify_1.default)();
exports.prisma = new client_1.PrismaClient();
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.prisma.games.create({
            data: {
                partyName: "JOURS III",
                winner: "null",
                chasseur: true,
                cupidon: true
            }
        });
    });
}
console.log(__dirname);
server.register(require("@fastify/static"), {
    root: path_1.default.join(__dirname, 'src', 'assets'),
    prefix: '/public/assets/'
});
server.get('/public/json/*', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params; // Spécifie le type des paramètres
    const filePath = path_1.default.join(__dirname, 'src', 'config', params['*']);
    const bufferIndexHtml = (0, fs_1.readFileSync)(filePath);
    reply.type('text/json').send(bufferIndexHtml);
    try {
        yield reply.type('text/html').send(bufferIndexHtml);
    }
    catch (error) {
        console.error(error);
        reply.code(500).send('Internal Server Error');
    }
}));
server.register(require("./src/routes/games/"));
server.register(cors_1.default, { /* put your options here */});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
