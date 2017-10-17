$(document).ready(function() 
{	


// Declare Variables ------------------------------------------------------------>


	var winningNumber = 0;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var rubyRandom = 0;
	var sapphireRandom = 0;
	var topazRandom = 0;
	var emeraldRandom = 0;


// Randomizer functions ------------------------------------------------------------>


	// Generate random Winning number 
	function newWinningNumber(){
		winningNumber = Math.floor(Math.random() * 119) + 1;
		console.log("Winning Number: " + winningNumber);
		// Print winning number to the random-number-box
		$(".random-number-box").html(winningNumber);

		gamePlay(winningNumber);
		return winningNumber;
	}
	

	// Generate random values for each Gem
	// Assign the gems to their appropriate random value
	function newRubyRandom(){
	rubyRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current ruby Value: " + rubyRandom);
	$("#ruby").val(rubyRandom);
	$("#ruby").val();
	}

	function newSapphireRandom(){
	sapphireRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current sapphire Value: " + sapphireRandom);
	$("#sapphire").val(sapphireRandom);
	}

	function newTopazRandom(){
	topazRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current topaz Value: " + topazRandom);
	$("#topaz").val(topazRandom);
	}

	function newEmeraldRandom(){
	emeraldRandom = Math.floor(Math.random() * 11) + 1;
	console.log("Current emerald Value: " + emeraldRandom);
	$("#emerald").val(emeraldRandom);
	}


// Click Functions --------------------------------------------------------------->


	newWinningNumber();
	newRubyRandom();
	newSapphireRandom();
	newTopazRandom();
	newEmeraldRandom();


// Game Play Function ------------------------------------------------------------>


	function gamePlay()
	{	
		if(totalScore == winningNumber)
		{
			wins++;
			$(".result").html("You win!!");
			reset();
		}
		console.log(totalScore);
		console.log(winningNumber);
		if (totalScore > winningNumber)
		{
			losses++;
			$(".result").html("You lose..");
			reset();
		}

	}


// Click Functions ------------------------------------------------------------>

function clickHelper(gem){
		$(".result").html("");
		console.log(rubyRandom);
		$(".gem-value-box").append(totalScore = totalScore + gem);
		$(".gem-value-box").append(" | ");
		console.log(totalScore);
		gamePlay();
}
	// When Ruby is clicked, add value to totalScore on each click
	$("#ruby").on("click", function ruby(){
		clickHelper(rubyRandom);
	});
	// When Sapphire is clicked, add value to totalScore on each click
	
	$("#sapphire").on("click", function sapphire(){
		clickHelper(sapphireRandom);
	});	
	// When Topaz is clicked, add value to totalScore on each click
	$("#topaz").on("click", function topaz(){
		clickHelper(topazRandom);
	});
	// When Emerald is clicked, add value to totalScore on each click
	$("#emerald").on("click", function emerald(){
		clickHelper(emeraldRandom);
	});


// Reset Game after win or loss --------------------------------------------------->


	function reset(){

		// Reset score to zero
		totalScore = 0;

		// Change wins counter on html
		$(".win-row").html("Wins: " + wins);
		$(".loss-row").html("Loss: " + losses);
		$(".gem-value-box").html("");

		console.log("check");

		// New random value for winning number
		newWinningNumber();

		// New random values for each Gem
		newRubyRandom();
		newSapphireRandom();
		newTopazRandom();
		newEmeraldRandom();

		console.log(wins);

	}

	// console.log(totalScore[0] + totalScore[1]);
	console.log(totalScore);
	console.log(wins);

});

