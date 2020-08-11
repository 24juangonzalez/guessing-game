<!DOCTYPE html>
<html>
	<head>
		<title>Guessing Game</title>
		<script>
			var randomNum =	Math.round(Math.random() * 99) + 1; //Global variable - value 1-100
			
			document.title = "Guessing Game " + randomNum;  //cheat!
			
			var guesses = 0; //Global variable

			function check_it()
			{
			   guesses++;

			   if (randomNum == myGuess.value)  //Correct!
		       {
 			        if(guesses == 1)
 			           myFeedback.innerHTML ="Way to go! You guessed it in " + guesses + " try!";
 			        else
   			           myFeedback.innerHTML ="Way to go! You guessed it in " + guesses + " tries!";
 		       }   
			   else  //Wrong!
      			{

      			    if (randomNum < myGuess.value) 
      		        {
		     			   myFeedback.innerHTML = "Too high!";
		     		}
		   			else
		 			{
 	            		   myFeedback.innerHTML = "Too low!";
 	                }
 	           }         
 		 	   myGuess.select();
			}
		</script>
	</head>

	<body onload="myGuess.focus()">

		<h1>Guessing Game</h1>
		
		<p><span id="myFeedback">&nbsp;</span></p>
		
		Guess a number (between 1 and 100): <input id="myGuess" type="text" /><br />
	
		<button type="button" onclick="check_it()">Guess</button>
</body>

</html>
