var secretNum,
	guessCount,
  lastDiff;

var prevGuesses = [];

$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Event Listeners---*/
  	$('#guessButton').click(function(){
  		feedback();
  	});

  	$('.new').click(function(){
  		newGame();
  	});

  	/*---Custom Functions---*/


	  function numGen(){
		var num = Math.random() * 100;
		num = Math.round(num);
		return num;
  	};

  	function feedback() {
  		var guess = $('#userGuess').val();
  		guess = parseInt(guess);
  		if (!guess) {
  			alert("It seems that what you entered was not a number.  Please enter a number between 1 and 100.");
  		}
  		else if (guess > 100) {
  			alert("The number you entered was over 100. Please enter a number between 1 and 100.");
  		}
      else if ($.inArray(guess, prevGuesses) != -1) {
        $('#feedback').text('You already guessed ' + guess + '.');
      }
  		else {
        prevGuesses.push(guess);
  			guessCount++;
        var diff = Math.abs(guess - secretNum);

  			if (diff === 0) {
  				$('#feedback').text("You won in " + guessCount + " guesses!");
  				$('#guessButton').prop('disabled', true);
  			}
  			else if (diff >= 50) {
  				$('#feedback').text("I can't believe how cold you are.");
  				
  			}
  			else if (diff >= 40) {
  				$('#feedback').text("Pretty cold, but not arctic.");
  			}
  			else if (diff >= 30) {
  				$('#feedback').text("Luke warm.");
  				
  			}
  			else if (diff >= 20) {
  				$('#feedback').text("You're pretty warm, but not hot.");
  				
  			}
  			else if (diff >= 10) {
  				$('#feedback').text("You are hot.");
  				
  			}
  			else {
  				$('#feedback').text("You are as hot as a habanero!");
  				
  			}
  			$('#guessList').append("<li>" + guess + "</li>");
  			$('#count').text(guessCount);
  		}
  	};

  	/*--- Start a new game ---*/
  	function newGame() {
  		secretNum = numGen();
  		guessCount = 0;
  		$('#count').text(guessCount);
  		$('#guessList').text("");
  		$('#feedback').text("Make your Guess!");
  		$('#guessButton').prop('disabled', false);
  		$('#userGuess').val("");

  	};
  	newGame();
});


