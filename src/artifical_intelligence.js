export class AI {
    attack(game) {
        let attCard = game.computerDeck.shift();
        game.attackCard.src="images/" + attCard[0] + "_of_" + attCard[1] + ".png";
        let rang = attCard[0];
    }
}