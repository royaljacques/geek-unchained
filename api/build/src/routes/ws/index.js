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
Object.defineProperty(exports, "__esModule", { value: true });
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/websocket", { websocket: true }, (connection, req) => {
            const { socket } = connection;
            socket.on('message', message => {
                if (message.toString() === "ping") {
                    return socket.send("pong");
                }
                // message.toString() === 'hi from client'
                socket.send('hi from server');
            });
            socket.send("hi");
        });
    });
}
exports.default = routes;