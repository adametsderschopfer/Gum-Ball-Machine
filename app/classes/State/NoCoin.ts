import {IStateMessage, MachineState} from "./State";
import {BallSaleState} from "./BallSaleState";
import {IBall} from "../Ball";
import {ICash} from "../Cash";
import {EmptyStorageTankState} from "./EmptyStorageTankState";
import {HasCoinState} from "./HasCoinState";

export class NoCoinState extends MachineState {
    public stateId = BallSaleState.NO_COIN;

    public dispenseBall(): IBall | IStateMessage {
        return {
            message: "Wrong coin",
        }
    }

    public insertCoin(coin: ICash): void {
        if (coin.value !== this.ballMachine.ballCost) {
            this.returnCoin();
            return;
        }

        if (!this.ballMachine.storage.balls.length) {
            this.ballMachine.changeState(new EmptyStorageTankState(this.ballMachine));
            return;
        }

        this.ballMachine.changeState(new HasCoinState(this.ballMachine));
    }

    public returnCoin() {
        this.ballMachine.changeState(new NoCoinState(this.ballMachine));
        // ... return coin
    }

    public turnCrank(): void {
        // void
    }
}