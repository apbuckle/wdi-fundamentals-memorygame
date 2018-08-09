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

var checkForMatch = function() 
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
		console.log("You found a match!");
	} 
	else 
	{
		console.log("Sorry, try again.");
	}
	var flipCard = function(cardId) 
	{
		flipCard(0);
		flipCard(2);
		checkForMatch()
		console.log("User flipped" + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cardImage);
		console.log(suit);
	}
}

if (cardsInPlay.length === 2) 
{
	if (cardsInPlay[0] === cardsInPlay[2]) 
	{
		results = alert("You found a match!");
	} 
	else if (cardsInPlay[0] !== cardsInPlay[2]) 
	{
		results = alert("Sorry, try again!");
	}
}
	




