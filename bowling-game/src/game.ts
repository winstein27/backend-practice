export class Game {
    private currentRoll;
    private rolls;
    
    constructor(){
        this.currentRoll = 0;
        this.rolls = new Map<number, number>();
    }

    roll(pins: number): void {
        this.currentRoll += 1;
        this.rolls.set(this.currentRoll, pins);
    }

    getScore(): number {
        let score = 0;

        for(const roll of this.rolls) {
            const isAfterSpare = roll[0] > 2 
                && roll[0] % 2 === 1 
                && ((this.rolls.get(roll[0] - 1) || 0) + (this.rolls.get(roll[0] - 2) || 0) === 10);
            
            score += roll[1] * (isAfterSpare ? 2 : 1);
        }

        return score;
    }
}