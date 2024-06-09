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
;
//create()
server.register(require("@fastify/static"), {
    root: path_1.default.join(__dirname, 'src', "assets"),
    "prefix": "/images/cards/"
});
server.register(require("./src/routes/games/"));
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
