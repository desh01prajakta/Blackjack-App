let player = {
  name: "PD",
  chips: 0
}
let isAlive = false;
let hasBlackjack = false;
let sum = 0;
let cards = [];
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "do you want to draw a new card";
  } else if (sum === 21) {
    message = "you won a black jack";
    hasBlackjack = true;
  } else {
    message = "you lost the game";
    hasBlackjack = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false && sum < 21) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
