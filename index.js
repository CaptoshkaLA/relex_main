import {Game} from './src/game.js';
import {Player} from "./src/player.js";
import {AI} from './src/artifical_intelligence.js'

function main() {

    let game = new Game;
    let player = new Player;
    let ai = new AI;
    let k = 0;
    game.gameStart();
    game.actionDiv.addEventListener("click", function() {
      let fl;
      if(k === 0) {
        k++;
        fl = game.whoGoesFirst();
        game.tableInitialize();
        if(fl === 0) {
          let flag = 0;
          player.attack(game, flag);
          fl = 1;
        } else {
          ai.attack(game);
          fl = 0;
        }
      } else {
        while (true) {
          if (fl === 1) {
            let flag = 0;
            player.attack(game, flag);
          } else if (fl === 0) {
            ai.attack(game);
          }

          if (game.defeat()) {
            break;
          }
        }
      }
    });
}

main();
