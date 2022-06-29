import {Game} from './src/game.js';
import {Player} from "./src/player.js";
import {AI} from './src/artifical_intelligence.js'

function main() {

    let game = new Game;
    let player = new Player;
    let ai = new AI;
    let k = 0;
    let fl = {val: 0};
    game.gameStart();
    game.actionDiv.addEventListener("click", function() {
      if(k === 0) {
        k++;
        fl.val = game.whoGoesFirst();
        game.tableInitialize();
        if(fl.val === 0) {
          let flag = 0;
          game = player.attack(game, flag);
          fl.val = 1;
        } else {
          game = ai.attack(game);
          fl.val = 0;
        }
      } else {
        while (true) {
          alert(fl.val);
          if (fl.val === 0) {
            let flag = 0;
            alert("It's your turn now ")
            game.actionDiv.addEventListener("click", function() {
              fl.val = 1;
              game = player.attack(game, flag);
            }, {once: true});
          } else if (fl.val === 1) {
            ai.attack(game);
            alert("It's computer turn now ")
            game.actionDiv.addEventListener("click", function() {
              fl.val = 0;
              game = ai.attack(game);
            }, {once: true});
          }

          if (game.defeat()) {
            break;
          }
        }
      }
    });
}

main();
