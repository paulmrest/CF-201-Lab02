'use strict';

// Lab 02 - About Me Guessing Game
alert('Hi there. We\'re going to play a guessing game about me!');

var totalCorrectCounter = 0;
var userName = prompt('First, let\'s introduce ourselves. What\'s your name?');
//START-CONSOLE-TESTING
// console.log('userName: ' + userName);
//END-CONSOLE-TESTING
alert('Welcome ' + userName + ', looking good!');

var theRealPaul = prompt(userName + ', are you talking to the real Paul right now?');
//START-CONSOLE-TESTING
// console.log('theRealPaul: ' + theRealPaul);
//END-CONSOLE-TESTING
if (theRealPaul.toLowerCase() === 'yes' ||
    theRealPaul.toLowerCase() === 'y' ||
    theRealPaul.toLowerCase() === 'yeah')
{
  alert('Of course you are. We\'ve locked him in a room somewhere.');
}
else
{
  totalCorrectCounter++;
  alert('Obviously. This is just an algorithim (or is it?).');
}

var hairEnvy = prompt('Are you envious of Paul\'s hair?');
//START-CONSOLE-TESTING
// console.log('hairEnvy: ' + hairEnvy);
//END-CONSOLE-TESTING
if (hairEnvy.toLowerCase() === 'yes' ||
    hairEnvy.toLowerCase() === 'y' ||
    hairEnvy.toLowerCase() === 'yeah')
{
  totalCorrectCounter++;
  alert('Valid choice, ' + userName + '. His hair once almost started a bar fight.');
}
else
{
  alert('Hair security is nice to have, isn\'t it?');
}

var arnoldSchwarzenegger = prompt('Did Arnold Schwarzenegger kill Paul\'s grandmother?');
//START-CONSOLE-TESTING
// console.log('arnoldSchwarzenegger: ' + arnoldSchwarzenegger);
//END-CONSOLE-TESTING
if (arnoldSchwarzenegger.toLowerCase() === 'yes' ||
    arnoldSchwarzenegger.toLowerCase() === 'y' ||
    arnoldSchwarzenegger.toLowerCase() === 'yeah')
{
  totalCorrectCounter++;
  alert('He did indeed. By being elected as the Governor of California in 2003.');
}
else
{
  alert('Effects are like ripples sometimes, ' + userName + ', they spread much further than you\'d expect.');
}

var messier101Spiral = prompt('Can your naked eye see spiral structure in Messier 101 with a 12 inch telescope?');
//START-CONSOLE-TESTING
// console.log('messier101Spiral: ' + messier101Spiral);
//END-CONSOLE-TESTING
if (messier101Spiral.toLowerCase() === 'yes' ||
    messier101Spiral.toLowerCase() === 'y' ||
    messier101Spiral.toLowerCase() === 'yeah')
{
  totalCorrectCounter++;
  alert('You know it ' + userName + '!');
}
else
{
  alert('I don\'t feel like you\'ve really tried at a proper dark sky location. Maybe give that a whirl.');
}

//Lab03 - Expanding 'About Me' Guessing Games

//Number guessing game
alert('Next, ' + userName + ', we\'re going to try a number guessing game.');
//choose a random number >= 1 and <= 20
const randomNumber = Math.floor(Math.random() * (20 + 1)) + 1;
const numAllowedGuesses = 4;
var numGuessCount = 0;
var numCorrectlyGuessed = false;
//START-CONSOLE-TESTING
// console.log('randomNumber: ' + randomNumber);
//END-CONSOLE-TESTING
while (!numCorrectlyGuessed)
{
  var userGuess = prompt('Guess a number between 1 and 20. You have ' +
  (numAllowedGuesses - numGuessCount) + ' guesses remaining. Enter \'x\' to exit.');
  //START-CONSOLE-TESTING
  // console.log('userGuess: ' + userGuess);
  // console.log('numGuessCount: ' + numGuessCount);
  //END-CONSOLE-TESTING
  if (userGuess.toLowerCase() === 'x')
  {
    alert('Thanks for playing! Onto the next game.');
    break;
  }

  if (isNaN(parseFloat(userGuess)) || !isFinite(userGuess))
  {
    alert('Not a guess. Please enter a numerical value.');
  }
  else if (parseInt(userGuess) === randomNumber)
  {
    alert('Right! You\'ve guessed it!');
    numCorrectlyGuessed = true;
    totalCorrectCounter++;
  }
  else if (numGuessCount >= numAllowedGuesses)
  {
    alert('You\'ve used up all your guesses. The answer was ' + randomNumber + '. Better luck next time!');
    break;
  }
  else if (parseInt(userGuess) < randomNumber)
  {
    numGuessCount++;
    alert('You\'re too low. Guess again.');
  }
  else if (parseInt(userGuess) > randomNumber)
  {
    numGuessCount++;
    alert('You\'re too high. Guess again.');
  }
}

//Multiple correct answers guessing game
alert('Now, ' + userName + ' we\'re going to try a different sort of guessing game!');
const seanConneryBondFilms = [
  'Dr. No',
  'From Russia with Love',
  'Goldfinger',
  'Thunderball',
  'You Only Live Twice',
  'Bond in Diamonds Are Forever',
  'Never Say Never Again'
];

//START-CONSOLE-TESTING
// console.log('seanConneryBondFilms: ' + seanConneryBondFilms);
//END-CONSOLE-TESTING

const bondAllowedGuesses = 6;
var bondGuessCount = 0;
var bondCorrectlyGuessed = false;
while (!bondCorrectlyGuessed)
{
  var bondUserGuess = prompt('Name a Sean Connery Bond film. You have ' + (bondAllowedGuesses - bondGuessCount) + ' guesses remaining. Enter \'x\' to exit.');

  //START-CONSOLE-TESTING
  // console.log('bondUserGuess: ' + bondUserGuess);
  // console.log('bondGuessCount: ' + bondGuessCount);
  //END-CONSOLE-TESTING

  if (bondUserGuess.toLowerCase() === 'x')
  {
    alert('Thanks for playing! Bye.');
    break;
  }

  //realistically this should be a for-each loop
  //alternatively, with properly normalized data, we could use array.include()
  for (var i = 0; i < seanConneryBondFilms.length; i++)
  {
    var oneBondFilm = seanConneryBondFilms[i];
    if (bondUserGuess.toLowerCase() === oneBondFilm.toLowerCase())
    {
      bondCorrectlyGuessed = true;
    }
  }
  if (bondCorrectlyGuessed)
  {
    totalCorrectCounter++;
    alert('Correct! ' + bondUserGuess + ' is a Sean Connery Bond film.');
  }
  else
  {
    bondGuessCount++;
    alert('Unfortunately ' + bondUserGuess + ' is not a Sean Connery Bond film. Although it sounds like a good one!');
  }

  if (bondGuessCount >= bondAllowedGuesses)
  {
    alert('You\'ve used up all your guesses. Sorry.');
    break;
  }
}
var prettyPrintSeanConneryBondFilms = '';
for (var j = 0; j < seanConneryBondFilms.length; j++)
{
  prettyPrintSeanConneryBondFilms += '  ' + seanConneryBondFilms[j] + '\n';
}

alert('For future reference, the complete list of Sean Connery Bond films is: \n' + prettyPrintSeanConneryBondFilms);

alert('Thanks for playing my games. You got a total of ' + totalCorrectCounter + ' questions right.');
