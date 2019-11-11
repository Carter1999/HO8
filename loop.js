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
intMin = parseInt (prompt("Choose the lowest number (but no lower then 0) in your guessing range:"));
while (isNaN(intMin)|| (intMin<0))
{
    intMin = parseInt(prompt("I'm sorry but your lowest number choice is invalid. \n" + "Please choose the lowest number (but no lower than 0) in your guessing range:"));
}
document.write ("Lowest number = " + intMin);

/The following line prompts the user to enter their highest number * and then validates that the user entered an actual number and make sure that the * number is at least 2 more than the minimum (so that there is some guessing involved). */;

intMax = parseInt (prompt("Choose the largest number in your guessing range:"));
while (isNaN(intMax)|| (intMax > intMin + 2))
// This line promts the user that they have entere their largest number choice wrong.
{
    intMax = parseInt(prompt("I'm sorry but your largest number choice is invalid. \n" + "Please choose the largest number must be at least 2 higher then your minimum in your guessing range:"));
}
document.write ("Largest number = " + intMax);

// These lines prompts the user to input a number between their highest and lowest and then lets the user know their guess is invalid.
intGuess = parseInt (prompt("Choose a number between the lowest and the highest ones:"));
while (isNaN(intMin<intGuess<intMax))
{
    intGuess = parseInt (prompt("Your guess is invalid. \n" + "Please make a guess between the lowest and highest ones." ));
}
document.write ("Number in between = " + intGuess);

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
