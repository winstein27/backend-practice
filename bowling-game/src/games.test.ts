import { Game } from "./game";

describe("game", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it("should score 0 when rolling 0 pins", () => {
    rollMany(20, 0);

    expect(game.getScore()).toBe(0);
  });

  it("should score 20 when rolling only ones", () => {
    rollMany(20, 1);

    expect(game.getScore()).toBe(20);
  });

  it("should double pins after a spear", () => {
    rollSpare();
    game.roll(3);

    rollMany(17, 0);

    expect(game.getScore()).toBe(16);
  });

  it("should double pins twice after a strike", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);

    rollMany(16, 0);

    expect(game.getScore()).toBe(24);
  });

  it("should throws when pins are invalid", () => {
    expect(() => game.roll(-1)).toThrow("Pins must be between 0 and 10.");
  });

  it("should throws when try to roll after 10 rolls", () => {
    rollMany(20, 3);
    expect(() => game.roll(1)).toThrow("Game ended.");
  });

  it("should allow more balls when spear or strike", () => {
    rollMany(16, 1);
    rollSpare();
    game.roll(5);
    game.roll(3);
    game.roll(1);

    expect(game.getScore()).toBe(40);
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

  function rollStrike(): void {
    game.roll(10);
  }
});
