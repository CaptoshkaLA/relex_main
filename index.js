import {Game} from './src/game.js';
import {Player} from "./src/player.js";

function main() {

  let game = new Game;
  let player = new Player;
  game.gameStart();
  game.actionDiv.addEventListener("click", function() {
    let fl = game.whoGoesFirst();
    game.tableInitialize();
    if(fl === 0) {
      let flag = 0;
      player.attack(game, flag);
    } else {
      //ai.attackAI();
    }
  });
}

main();
