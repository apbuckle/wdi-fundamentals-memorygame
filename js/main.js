var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "omage/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert('You found a match!');
		}
		else{
			alert('Sorry, try again.');
		}
	}
}

var flipCard = function(){
	var CardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[CardId].rank);
	console.log(cards[CardId].suit);
	console.log(cards[CardId].cardImage);

	cardsInPlay.push(cards[CardId].rank);

	this.setAttribute("src", cards[CardId].cardImage);
	checkForMatch();	
}

function createBoard()
{
	for (var i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard, false);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();