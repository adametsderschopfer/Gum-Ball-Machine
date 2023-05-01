import {ICash} from "../Cash";
import {BallMachine} from "../BallMachine";
import {IBall} from "../Ball";
import {BallSaleState} from "./BallSaleState";

export interface IStateMessage {
    message: string;
}

export abstract class MachineState {
    public abstract stateId: BallSaleState;

    constructor(public ballMachine: BallMachine) {
    }

    /*
     * В данном методе будет реализована стадия
     * перехода из состояния отсутствия монетки в состояние
     * наличия монетки или в состояния отсутствия шариков
     * */
    public abstract insertCoin(coin: ICash): void;

    /*
    * В данном методе будет реализована стадия
    * перехода из состояния наличия монетки в состояния
    * проданного шарика либо при отсутствии
    * шариков в состояния "Нет шариков"
    * */
    public abstract turnCrank(): void;

    /*
    * Данный метод будет возвращать монетку обратно
    * в случае если значение монетки не соответствует значению
    * указанному в BallMachine
    * */
    public abstract returnCoin(): void;

    /*
    * В данном методе будет реализована стадия когда
    * происходит выдача шарика и состояние машины переходит
    * после проверки наличия шарика либо в состояние "нет монетки"
    * либо при отсутствии шариков, в "Нет шариков"
    * */
    public abstract dispenseBall(): IBall | IStateMessage;
}