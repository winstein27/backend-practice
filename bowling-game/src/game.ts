export class Game {
    private score;
    private count;
    private pins;
    
    constructor(){
        this.score = 0;
        this.count = 0;
        this.pins = new Map<Number, number>();
    }

    roll(pins: number): void {
        this.count += 1;
        this.pins.set(this.count, pins);
        this.score += this.calculateScore(pins);
    }

    private calculateScore(pins: number): number {
        const isAfterSpare = this.count > 2 
            && this.count % 2 === 1 
            && ((this.pins.get(this.count - 1) || 0) + (this.pins.get(this.count - 2) || 0) === 10);

        return pins * (isAfterSpare ? 2 : 1);
    }

    getScore(): number {
        return this.score;
    }
}