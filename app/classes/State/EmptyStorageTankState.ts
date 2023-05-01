import {IStateMessage, MachineState} from "./State";
import {BallSaleState} from "./BallSaleState";
import {ICash} from "../Cash";

export class EmptyStorageTankState extends MachineState {
    public stateId = BallSaleState.EMPTY_STORAGE_TANK;

    public dispenseBall(): IStateMessage {
        return {
            message: "Empty storage"
        };
    }

    public insertCoin(coin: ICash): void {
        // void
    }

    public returnCoin(): void {
        // ... return coin
    }

    public turnCrank(): void {
        // void
    }
}