import {Game} from './src/game.js';
import {Player} from "./src/player.js";
import {AI} from './src/artifical_intelligence.js'

function main() {

    let game = new Game;
    let player = new Player;
    let ai = new AI;
    game.gameStart();
    console.log(game.computerDeck);
    console.log(game.playerDeck);
    game.playGame(player, ai);
}

main();