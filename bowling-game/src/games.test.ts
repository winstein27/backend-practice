import { Game } from "./game";

describe('game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('test score rolling 0 pins', () => {
        rollMany(20, 0);

        expect(0).toBe(game.getScore());
    });

    it('test score rolling 1', () => {
        rollMany(20, 1);

        expect(20).toBe(game.getScore());
    });

    it('test one spare', () => {
        rollSpare();
        game.roll(3);

        rollMany(17, 0);

        expect(16).toBe(game.getScore());
    });

    function rollMany(n: number, pins: number): void {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }

    function rollSpare(): void {
        game.roll(5);
        game.roll(5);
    }
});