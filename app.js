const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
// RANDOMIZES AN ARRAY
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIDs = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneID = cardsChosenIDs[0];
  const optionTwoID = cardsChosenIDs[1];

  if (optionOneID == optionTwoID) {
    cards[optionOneID].setAttribute("src", "images/blank.png");
    cards[optionTwoID].setAttribute("src", "images/blank.png");
    alert("you have clicked the same image!");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a Match!");
    cards[optionOneID].setAttribute("src", "images/white.png");
    cards[optionTwoID].setAttribute("src", "images/white.png");
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoID].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneID].setAttribute("src", "images/blank.png");
    cards[optionTwoID].setAttribute("src", "images/blank.png");
    alert("Sorry, try again!");
  }

  resultDisplay.textContent = cardsWon.length;

  cardsChosen = [];
  cardsChosenIDs = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You Found them All!";
  }
}

function flipCard() {
  console.log(cardArray);
  const cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenIDs.push(cardID);
  console.log(cardsChosen);
  console.log(cardsChosenIDs);

  this.setAttribute("src", cardArray[cardID].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
