import {MachineState} from "./State";
import {BallSaleState} from "./BallSaleState";
import {ICash} from "../Cash";
import {IBall} from "../Ball";
import {BallSoldState} from "./BallSoldState";

export class HasCoinState extends MachineState {
    public stateId = BallSaleState.HAS_COIN;

    public dispenseBall(): IBall {
        // void
        return 0;
    }

    public insertCoin(coin: ICash): void {
        //void
    }

    public returnCoin(): void {
        // void
    }

    public turnCrank(): void {
        this.ballMachine.changeState(new BallSoldState(this.ballMachine));
    }
}