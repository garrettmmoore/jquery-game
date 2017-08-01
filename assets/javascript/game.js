$(document).ready(function() 
{	
	// Declare initial variables
	// $("gem-value-box")===totalScore;

	var winningNumber = 0;
	// Generate random Winning number 
	function newWinningNumber(){
		winningNumber = Math.floor(Math.random() * 119) + 1;
		console.log("Winning Number: " + winningNumber);
		// Print winning number to the random-number-box
		$(".random-number-box").html(winningNumber);

		gamePlay(winningNumber);
		return winningNumber;
	}
	

	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	// Generate random values for each Gem
	var rubyRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current ruby Value: " + rubyRandom);
	var sapphireRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current sapphire Value: " + sapphireRandom);
	var topazRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current topaz Value: " + topazRandom);
	var emeraldRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current emerald Value: " + emeraldRandom);
	

	

	// Assign the gems to their appropriate random value
	$("#ruby").val(rubyRandom);
	$("#sapphire").val(sapphireRandom);
	$("#topaz").val(topazRandom);
	$("#emerald").val(emeraldRandom);
	
	// How the game works..
	function gamePlay(x,y)
	{	
		if(totalScore == winningNumber)
		{
			wins++;
			$(".win-loss-box").html("You win!!");
			reset();
		}
		console.log(totalScore);
		console.log(winningNumber);
		// else (totalScore > winningNumber)
		// {
		// 	losses++;
		// 	$(".win-loss-box").html("You lose..");
		// 	reset();
		// }
		// $("#win-row").html(wins);
		// $("#loss-row").html(losses);
	}


	// When Ruby is clicked, add value to totalScore on each click
	$("#ruby").on("click", function ruby(){
		
		// $(".gem-value-box").html(rubyRandom);
		console.log(rubyRandom);
		$(".gem-value-box").append(totalScore = totalScore + rubyRandom);
		$(".gem-value-box").append(" | ");
		console.log(rubyRandom);
		console.log(totalScore);
		gamePlay(totalScore);


	// When Sapphire is clicked, add value to totalScore on each click
	});
	$("#sapphire").on("click", function sapphire(x){
		// $(".gem-value-box").html(sapphireRandom);
		$(".gem-value-box").append(totalScore = totalScore + sapphireRandom );
		$(".gem-value-box").append(" | ");
		console.log(totalScore);
		gamePlay();

		
	// When Topaz is clicked, add value to totalScore on each click
	});

	$("#topaz").on("click", function topaz(x){
		// $(".gem-value-box").html(topazRandom);
		$(".gem-value-box").append(totalScore = totalScore + topazRandom);
		$(".gem-value-box").append(" | ");
		console.log(totalScore);
		gamePlay();

	});

	// When Emerald is clicked, add value to totalScore on each click
	$("#emerald").on("click", function emerald(x){
		// $(".gem-value-box").html(emeraldRandom);
		$(".gem-value-box").append(totalScore = totalScore + emeraldRandom);
		$(".gem-value-box").append(" | ");
		console.log(totalScore);
		gamePlay();

	});

	// Resets the game after win or loss
	function reset(){
		totalScore = 0;
		// $(".random-number-box").remove();
		// $(".gem-value-box").remove();
		// $("#ruby").remove();
		// $("#sapphire").remove();
		// $("#topaz").remove();
		// $("#emerald").remove();

		// New random value for winning number
		newWinningNumber();

		// New random values for each Gem
		var rubyRandom = Math.floor(Math.random() * 11) + 1;
		var sapphireRandom = Math.floor(Math.random() * 11) + 1;
		var topazRandom = Math.floor(Math.random() * 11) + 1;
		var emeraldRandom = Math.floor(Math.random() * 11) + 1;

	}
	// for(var i=0; i<totalScore.length; i++) { totalScore[i] = parseInt(totalScore[i]); }
	
	// console.log(totalScore[0] + totalScore[1]);
	console.log(totalScore);
	newWinningNumber();



});

