export class Game {
    private score;
    
    constructor(){
        this.score = 0;
    }

    roll(pins: number): void {
        this.score += pins;
    }

    getScore(): number {
        return this.score;
    }
}