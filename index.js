import {Game} from './src/game.js';
import {Player} from "./src/player.js";
import {AI} from './src/artifical_intelligence.js'

function main() {

    let game = new Game;
    let player = new Player;
    let ai = new AI;
    let k = 0;
    //let fl = {val: 0};
    game.gameStart();
    game.actionDiv.addEventListener("click", function() {
      if(k === 0) {
        k++;
        game.turn = game.whoGoesFirst();
        console.log("0-player,1-bot " +game.turn);
        //fl.val = game.whoGoesFirst();
        game.tableInitialize();
        if(game.turn === 0) {
          let flag = 0;
          game = player.attack(game, flag);
          //fl.val = 1;
          game.turn = 1;
        } else {
          game = ai.attack(game);
          //fl.val = 0;
          game.turn = 0;
        }
      } else {
        console.log("0-player,1-bot " +game.turn);
        if(game.turn === 0) {
        //if (fl.val === 0) {
          //game.actionDiv.addEventListener("click", function() {
          game.actionDiv.addEventListener("click", () => {
            //fl.val = 1;
            //game.turn = 1;
            game.setTurnOne();
            let flag = 0;
            alert("It's your turn now ");
            game.tableInitialize();
            game = player.attack(game, flag);
          }, {once: true});
        //} else if (fl.val === 1) {
        } else if (game.turn === 1) {
          // game.actionDiv.addEventListener("click", function() {
          game.actionDiv.addEventListener("click", () => {
            //fl.val = 0;
            //game.turn = 0;
            game.setTurnZero();
            alert("It's computer turn now ");
            game.tableInitialize();
            game = ai.attack(game);
          }, {once: true});
        }
        if (game.defeat()) {
          //fl = -1;
          game.turn = -1;
        }
      }
    }, {once: true});
}

main();
