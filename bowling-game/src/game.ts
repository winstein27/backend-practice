export class Game {
    private currentRoll;
    private rolls;
    
    constructor(){
        this.currentRoll = 1;
        this.rolls = new Map<number, [number, number]>();
    }

    roll(pins: number): void {
        const roll = this.rolls.get(this.currentRoll);
        
        const newRoll = roll === undefined;
        this.rolls.set(this.currentRoll, newRoll ? [pins, 0] : [roll[0], pins]);
        
        if(!newRoll) {
            this.currentRoll += 1;
        }
    }

    getScore(): number {
        let score = 0;

        for(const [roll, pins] of this.rolls) {
            const isAfterSpare = roll > 1
            && (this.rolls.get(roll - 1) !== undefined)
            && (this.rolls.get(roll - 1)![0] + this.rolls.get(roll - 1)![1] === 10);
            console.log(isAfterSpare);
            
            score += pins[0] * (isAfterSpare ? 2 : 1) + pins[1];
        }

        return score;
    }
}