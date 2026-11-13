export class Game {
  private currentRoll;
  private rolls;

  constructor() {
    this.currentRoll = 1;
    this.rolls = new Map<number, [number, number, number?]>();
  }

  roll(pins: number): void {
    if (pins < 0 || pins > 10) {
      throw new Error("Pins must be between 0 and 10.");
    }

    if (this.currentRoll === 11) {
      const roll10 = this.rolls.get(10)!;

      if (!this.lastRollisAfterSpareOrStrike() || roll10.length === 3) {
        throw new Error("Game ended.");
      }

      roll10[2] = pins;
      this.rolls.set(10, roll10);

      return;
    }

    const roll = this.rolls.get(this.currentRoll);

    const newRoll = roll === undefined;
    this.rolls.set(this.currentRoll, newRoll ? [pins, 0] : [roll[0], pins]);

    if (!newRoll || pins === 10) {
      this.currentRoll += 1;
    }
  }

  getScore(): number {
    let score = 0;

    for (const [roll, pins] of this.rolls) {
      const prevRoll = this.rolls.get(roll - 1);

      let isAfterSpare = false;
      let isAfterStrike = false;

      if (prevRoll !== undefined) {
        isAfterSpare = prevRoll[0] + prevRoll[1] === 10;
        isAfterStrike = prevRoll[0] === 10;
      }

      score +=
        pins[0] * (isAfterSpare || isAfterStrike ? 2 : 1) +
        pins[1] * (isAfterStrike ? 2 : 1) +
        (pins[2] || 0);
    }

    return score;
  }

  private lastRollisAfterSpareOrStrike(): boolean {
    const prevRoll = this.rolls.get(9);

    return prevRoll !== undefined ? prevRoll[0] + prevRoll[1] === 10 : false;
  }
}
