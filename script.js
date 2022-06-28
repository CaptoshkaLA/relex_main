
let war = {
  values: [2, 3, 4, 5, 6],
  suits: ["clubs", "diamonds", "hearts", "spades"],
  cards: [],
  playerHand: [],
  computerHand: [],
  playerDeck: [],
  computerDeck: [],

  playerWon: false,
  computerWon: false,

  actionDiv: document.getElementById("action"),
  playerScore: document.getElementById("player_score"),
  computerScore: document.getElementById("computer_score"),
  playerCard1: document.getElementById("playerCard1"),
  computerCard1: document.getElementById("computerCard1"),
  playerCard2: document.getElementById("playerCard2"),
  computerCard2: document.getElementById("computerCard2"),
  playerCard3: document.getElementById("playerCard3"),
  computerCard3: document.getElementById("computerCard3"),

  attackCard: document.getElementById("attack_card"),

  // Building an array of all kinds of playing cards
  build: function() {
    for (let i = 0; i < this.values.length; i++){
      for (let j = 0; j < this.suits.length; j++) {
        this.cards.push([this.values[i], this.suits[j]]);
      }
    }
  },

  // Shuffle the array based on the Fisher — Yates Shuffle algorithm
  shuffle: function(cards) {
    let m = this.cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
      }
    return cards;
  },

  // The beginning of the round AFTER press FLIP! button
  roundStart: function() {
    war.actionDiv.style.height = "40px";
    war.actionDiv.innerHTML = "FLIP!";

    war.playerHand.push(war.playerDeck.shift());
    war.playerHand.push(war.playerDeck.shift());
    war.playerHand.push(war.playerDeck.shift());

    war.computerHand.push(war.computerDeck.shift());
    war.computerHand.push(war.computerDeck.shift());
    war.computerHand.push(war.computerDeck.shift());

    war.playerCard1.src="cards/" + war.playerHand[war.playerHand.length-1][0] + "_of_" + war.playerHand[war.playerHand.length-1][1] + ".png";
    war.playerCard2.src="cards/" + war.playerHand[war.playerHand.length-2][0] + "_of_" + war.playerHand[war.playerHand.length-2][1] + ".png";
    war.playerCard3.src="cards/" + war.playerHand[war.playerHand.length-3][0] + "_of_" + war.playerHand[war.playerHand.length-3][1] + ".png";

    war.computerCard1.src="cards/" + war.computerHand[war.computerHand.length-1][0] + "_of_" + war.computerHand[war.computerHand.length-1][1] + ".png";
    war.computerCard2.src="cards/" + war.computerHand[war.computerHand.length-2][0] + "_of_" + war.computerHand[war.computerHand.length-2][1] + ".png";
    war.computerCard3.src="cards/" + war.computerHand[war.computerHand.length-3][0] + "_of_" + war.computerHand[war.computerHand.length-3][1] + ".png";
    war.computerScore.innerHTML = war.computerDeck.length;
    war.playerScore.innerHTML = war.playerDeck.length;
    war.die();
  },

  // Auxiliary function
  randomInteger: function(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  },

  // We determine who will walk on this move
  die: function() {
    let ri = this.randomInteger(1,10);
    war.humanAttack();
    // if(this.randomInteger(1,10) > 5) {
    //     war.humanAttack();
    // } else {
    //   alert("Now its computer time!");
    //     war.computerAttack();
    // }
  },

  // Player's move
  humanAttack: function() {
    alert("Now its your turn");
    let attCard = war.playerDeck.shift();
    war.attackCard.src="cards/" + attCard[0] + "_of_" + attCard[1] + ".png";
    let rang = attCard[0];
    for (let i = 2; i >= 0; i--) {
      if(war.computerHand[i][0] < rang) {
        console.log(war.computerHand[i][0], rang)
        if(i===2) {
          war.computerCard1.addEventListener("click", function() {
            war.playerDeck.push(war.computerCard1);
            alert("First card is added to the deck");
            }, {once: true});
        } else if(i===1) {
          war.computerCard2.addEventListener("click", function() {
            war.playerDeck.push(war.computerCard2);
            alert("Second card is added to the deck");
            }, {once: true});
        } else {
          war.computerCard3.addEventListener("click", function() {
            war.playerDeck.push(war.computerCard3);
            alert("Third card is added to the deck");
            }, {once: true});
        }
      }

    }
  },

  // Fill the players' hands with randomly shuffled cards
  gameStart: function() {
    this.actionDiv.innerHTML = "FLIP!";
    this.build();
    this.shuffle();
    war.playerDeck = this.cards;
    this.shuffle();
    war.computerDeck = this.cards;
  }

};
war.gameStart();
war.actionDiv.addEventListener("click", war.roundStart);
