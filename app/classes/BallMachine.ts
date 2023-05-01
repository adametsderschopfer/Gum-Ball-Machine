import {IStateMessage, MachineState} from "./State/State";
import {Ball, IBall} from "./Ball";
import {Coin} from "./Coin";
import {IStorageTank, StorageTank} from "./StorageTank";
import {NoCoinState} from "./State/NoCoin";
import {ICash} from "./Cash";

export class BallMachine {
    private state: MachineState = new NoCoinState(this);
    private readonly _storage: IStorageTank;
    private _ballCost: ICash = new Coin(10);

    public get ballCost() { return this._ballCost.value; }
    public get storage(): IStorageTank { return this._storage; }

    constructor() {
        this._storage = new StorageTank([
            new Ball("Gum"),
            new Ball("Gum"),
            new Ball("Gum"),
            new Ball("Gum"),
            new Ball("Gum"),
        ]);
    }

    public changeState(state: MachineState): void {
        this.state = state;
    }

    public buyBall(coin: Coin): IBall | IStateMessage {
        this.state.insertCoin(coin);
        this.state.turnCrank();

        return this.state.dispenseBall();
    }
}