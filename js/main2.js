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
	if (cardsInPlay.length === 2) 
	{
		if (cardsInPlay[0] === cardsInPlay[2]) 
		{
			alert("You found a match!");
		} 
		else
		{
			alert("Sorry, try again!");
		}
	}	
}

var flipCard = function(cardId) 
{
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log("User flipped" + cards[cardId].rank);
	console.log(cardImage);
	console.log(suit);
}

flipCard(0);
flipCard(2);
	




