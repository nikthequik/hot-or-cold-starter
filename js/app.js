
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	function numGen(){
		var num = Math.random() * 100;
		num = Math.round(num);
		return num;
  	};

  	/*--- Start a new game ---*/
  	function newGame() {
  		var secretNum = numGen();
  		console.log(secretNum);
  	};

  	newGame();


});


