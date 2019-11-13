/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range).
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt (prompt("Choose the lowest number (but no lower than 0) in your guessing range:"));
while (isNaN(intMin) || (intMin<0))
{
  intMin = parseInt(prompt("I'm sorry but your lowest number choice is invalid. \n" + "Please choose the lowest number (but no lower than 0) in your guessing range:"));
}
document.write ("Lowest number = " + intMin);

intMax = parseInt (prompt("Choose the largest number (has to be at least two greater than your lowest number) in your guessing range:" ));
while (isNaN(intMax) || (intMax <= (intMin +1)))
{
  intMax = parseInt (prompt("I'm sorry but your largest number choice is invalid. \n" + "Please choose the largest number (must be at least the lowest number + 2) in your guessing range:"));
}
document.write ("Largest number = " + intMax);
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);
intCount = 1;
intGuess = parseInt (prompt("Choose a number between the lowest and largest ones:" ));
while (isNaN (intGuess) || intGuess < intMin || intGuess > intMax)
{
  intGuess = parseInt (prompt("I'm sorry but your guess is invalid. \n" + "Please make a guess between the lowest and largest number in your guessing range:"));
}
document.write ("Number in between = " + intGuess);




while (intGuess != intRandom)
{
  if (intGuess < intRandom)
  {
    alert ( "Guess is too low.");
  }
  else
    {
      alert ( "Guess is too high.");
    }
intCount ++;
intGuess = parseInt (prompt("Choose a number between the lowest and largest ones:" ));
while (isNaN (intGuess) || intGuess < intMin || intGuess > intMax)
{
  intGuess = parseInt (prompt("I'm sorry but your guess is invalid. \n" + "Please make a guess between the lowest and largest number in your guessing range:"));
}
document.write ("Number in between = " + intGuess);
}

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
 " and it only took you " + intCount + " attempts!");