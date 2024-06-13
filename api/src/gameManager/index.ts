import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../..';
type gameCreateProps = {
    id: string;
}
export default class GameManager {
    constructor() {

    }
    public createGame() {
        const id = uuidv4();

        return {
            id,
        }
    }
}