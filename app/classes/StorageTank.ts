import {IBall} from "./Ball";

export interface IStorageTank {
    balls: IBall[],

    refillBalls(balls: IBall[]): void
    dispenseBall(): IBall;
}

export class StorageTank implements IStorageTank {
    constructor(public balls: IBall[] = []) {
    }

    refillBalls(balls: IBall[]) { this.balls = balls; }

    dispenseBall(): IBall { return this.balls.pop() as IBall; }
}