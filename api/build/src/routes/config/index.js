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
const __1 = require("../../..");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/config/json/*', (req, reply) => __awaiter(this, void 0, void 0, function* () {
            const params = req.params;
            const filePath = path_1.default.join(__1.folder, 'src', 'config', params['*']);
            try {
                const bufferIndexHtml = (0, fs_1.readFileSync)(filePath, 'utf-8');
                reply.type('application/json').send(bufferIndexHtml);
            }
            catch (error) {
                console.error(error);
                reply.code(500).send('Internal Server Error');
            }
        }));
    });
}
module.exports = routes;
