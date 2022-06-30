export class AI {
    attack(game) {
        let attCard = game.computerDeck.shift();
        game.attackCard.src="images/" + attCard[0] + "_of_" + attCard[1] + ".png";
        let rang = attCard[0];
        let possibleCards = [];
        for (let i = 2; i >= 0; i--) {
            if(game.playerHand[i][0] < rang) {
                possibleCards.push(i);
            }
        }
        if(possibleCards.length === 0) {
            game.playerDeck.push(game.attackCard);
            alert("Computers card is added to your deck");
            game.computerScore.innerHTML = game.computerDeck.length;
            game.playerScore.innerHTML = game.playerDeck.length;
            game.playerDeck.push(game.playerHand.shift());
            game.playerDeck.push(game.playerHand.shift());
            game.playerDeck.push(game.playerHand.shift());
        } else {
            if(possibleCards.length === 3) {
                game.playerRedCards++;
                alert("The player was given a penalty point");
            }
            while(possibleCards.length !== 0) {
                let index = possibleCards.pop();
                if(index === 2) {
                    game.computerDeck.push(game.computerCard1);
                    alert("Computer beat your first card and took it for itself");
                    game.computerScore.innerHTML = game.computerDeck.length;
                    game.playerScore.innerHTML = game.playerDeck.length;
                    game.playerHand.splice(2,1);
                } else if(index === 1) {
                    game.computerDeck.push(game.computerCard2);
                    alert("Computer beat your second card and took it for itself");
                    game.computerScore.innerHTML = game.computerDeck.length;
                    game.playerScore.innerHTML = game.playerDeck.length;
                    game.playerHand.splice(1,1);
                } else {
                    game.computerDeck.push(game.computerCard3);
                    alert("Computer beat your third card and took it for itself");
                    game.computerScore.innerHTML = game.computerDeck.length;
                    game.playerScore.innerHTML = game.playerDeck.length;
                    game.playerHand.splice(0,1);
                }
                while(game.playerHand.length > 0) {
                    game.playerDeck.push(game.playerHand.shift());
                }
            }
        }
        return game;
    }
}