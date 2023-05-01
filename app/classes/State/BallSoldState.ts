import {IStateMessage, MachineState} from "./State";
import {BallSaleState} from "./BallSaleState";
import {ICash} from "../Cash";
import {EmptyStorageTankState} from "./EmptyStorageTankState";
import {IBall} from "../Ball";
import {NoCoinState} from "./NoCoin";

export class BallSoldState extends MachineState {
    public stateId = BallSaleState.BALL_SOLD;

    public dispenseBall(): IBall {
        this.ballMachine.changeState(new NoCoinState(this.ballMachine));
        return this.ballMachine.storage.dispenseBall();
    }

    public insertCoin(coin: ICash): void {
        // void
    }

    public returnCoin(): void {
        // void
    }

    public turnCrank(): void {
        // void
    }
}