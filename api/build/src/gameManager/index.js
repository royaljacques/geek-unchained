"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class GameManager {
    constructor() {
    }
    createGame() {
        const id = (0, uuid_1.v4)();
        return {
            id,
        };
    }
}
exports.default = GameManager;
