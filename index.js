import {Game} from './src/game.js';
import {Player} from "./src/player.js";
import {AI} from './src/artifical_intelligence.js'

function main() {

    let game = new Game;
    let player = new Player;
    let ai = new AI;
    let k = 0;
    let fl;
    game.gameStart();
    game.actionDiv.addEventListener("click", function() {
      if(k === 0) {
        k++;
        fl = game.whoGoesFirst();
        game.tableInitialize();
        if(fl === 0) {
          let flag = 0;
          game = player.attack(game, flag);
          fl = 1;
        } else {
          game = ai.attack(game);
          fl = 0;
        }
      } else {
        while (true) {
          alert(fl);
          if (fl === 0) {
            let flag = 0;
            alert("It's your turn now ")
            game.actionDiv.addEventListener("click", function() {
              game = player.attack(game, flag);
            }, {once: true});
            fl = 1;
          } else if (fl === 1) {
            ai.attack(game);
            alert("It's computer turn now ")
            game.actionDiv.addEventListener("click", function() {
              game = ai.attack(game);
            }, {once: true});
            fl = 0;
          }

          if (game.defeat()) {
            break;
          }
        }
      }
    });
}

main();
