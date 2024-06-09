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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../..");
const cardIndex = require("./../../config/cardsIndex.json");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/games/cards', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const result = yield __1.prisma.games.findFirst({
                where: {
                    id: 1
                }
            });
            if (result != null) {
                const { partyName, id, winner } = result, filteredResult = __rest(result, ["partyName", "id", "winner"]);
                return { data: filteredResult };
            }
        }));
    });
}
module.exports = routes;
