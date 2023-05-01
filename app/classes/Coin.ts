import {ICash} from "./Cash";

export class Coin implements ICash {
    constructor(public value: number) {
    }
}