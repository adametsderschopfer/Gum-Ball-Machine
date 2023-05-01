import {Coin} from "./classes/Coin";
import {BallMachine} from "./classes/BallMachine";

const coin = new Coin(10);
const ballMachine = new BallMachine();

console.log(ballMachine.buyBall(coin));