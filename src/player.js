//import {Game} from './src/game.js';
export class Player {

    // Player's move
    attack(game) {
        alert("humanAttack");
        let attCard = game.playerDeck.shift();
        game.attackCard.src="images/" + attCard[0] + "_of_" + attCard[1] + ".png";
        let rang = attCard[0];
        for (let i = 2; i >= 0; i--) {
            if(game.computerHand[i][0] < rang) {
                console.log(game.computerHand[i][0], rang)
                if(i===2) {
                    game.computerCard1.addEventListener("click", function() {
                        game.playerDeck.push(game.computerCard1);
                        alert("First card is added to the deck");
                    }, {once: true});
                } else if(i===1) {
                    game.computerCard2.addEventListener("click", function() {
                        game.playerDeck.push(game.computerCard2);
                        alert("Second card is added to the deck");
                    }, {once: true});
                } else {
                    game.computerCard3.addEventListener("click", function() {
                        game.playerDeck.push(game.computerCard3);
                        alert("Third card is added to the deck");
                    }, {once: true});
                }
            }
        }
    }
}