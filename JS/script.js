'use strict';

// Lab 02 - About Me Guessing Game
// Lab 03 - Expanding About Me Guessing Game

//functions
function theRealPaul(userName) {
  var theRealPaulGuess = prompt(userName + ', are you talking to the real Paul right now?');
  //START-CONSOLE-TESTING
  // console.log( theRealPaulGuess: ' + theRealPaulGuess);
  //END-CONSOLE-TESTING
  if (theRealPaulGuess.toLowerCase() === 'yes' ||
      theRealPaulGuess.toLowerCase() === 'y' ||
      theRealPaulGuess.toLowerCase() === 'yeah')
  {
    alert('Of course you are. We\'ve locked him in a room somewhere.');
    return 0;
  }
  else
  {
    alert('Obviously. This is just an algorithim (or is it?).');
    return 1;
  }
}

function hairEnvy(userName) {
  var hairEnvyGuess = prompt('Are you envious of Paul\'s hair?');
  //START-CONSOLE-TESTING
  // console.log('hairEnvyGuess: ' + hairEnvyGuess);
  //END-CONSOLE-TESTING
  if (hairEnvyGuess.toLowerCase() === 'yes' ||
      hairEnvyGuess.toLowerCase() === 'y' ||
      hairEnvyGuess.toLowerCase() === 'yeah')
  {

    alert('Valid choice, ' + userName + '. His hair once almost started a bar fight.');
    return 1;
  }
  else
  {
    alert('Hair security is nice to have, isn\'t it?');
    return 0;
  }
}

function arnoldSchwarzenegger(userName) {
  var arnoldSchwarzeneggerGuess = prompt('Did Arnold Schwarzenegger kill Paul\'s grandmother?');
  //START-CONSOLE-TESTING
  // console.log('arnoldSchwareneggerGuess: ' + arnoldSchwarzeneggerGuess);
  //END-CONSOLE-TESTIN
  if (arnoldSchwarzeneggerGuess.toLowerCase() === 'yes' ||
      arnoldSchwarzeneggerGuess.toLowerCase() === 'y' ||
      arnoldSchwarzeneggerGuess.toLowerCase() === 'yeah')
  {
    alert('He did indeed. By being elected as the Governor of California in 2003.');
    return 1;
  }
  else
  {
    alert('Effects are like ripples sometimes, ' + userName + ', they spread much further than you\'d expect.');
    return 0;
  }
}

function messier101Spiral(userName) {
  var messier101SpiralGuess = prompt('Can your naked eye see spiral structure in Messier 101 with a 12 inch telescope?');
  //START-CONSOLE-TESTING
  // console.log('messier101SpiralGuess: ' + messier101SpiralGuess);
  //END-CONSOLE-TESTING
  if (messier101SpiralGuess.toLowerCase() === 'yes' ||
      messier101SpiralGuess.toLowerCase() === 'y' ||
      messier101SpiralGuess.toLowerCase() === 'yeah')
  {
    alert('You know it ' + userName + '!');
    return 1;
  }
  else
  {
    alert('I don\'t feel like you\'ve really tried at a proper dark sky location. Maybe give that a whirl.');
    return 0;
  }
}

//third question for Lab02 - added on 4/30
function englishBreakfast(userName) {
  var englishBreakfastGuess = prompt('Are full English breakfasts the best breakfasts?');
  //START-CONSOLE-TESTING
  // console.log('englishBreakfastGuess: ' + englishBreakfastGuess);
  //END-CONSOLE-TESTING
  if (englishBreakfastGuess.toLowerCase() === 'yes' ||
      englishBreakfastGuess.toLowerCase() === 'y' ||
      englishBreakfastGuess.toLowerCase() === 'yeah')
  {
    alert('Yeah ' + userName + '! Who doesn\'t want beans and toast for breakfast?');
    return 1;
  }
  else
  {
    alert('Very little good came out of the British Empire. You\'re missing out on the one good thing that did.');
    return 0;
  }
}

//Lab03 - Expanding 'About Me' Guessing Games

//Number guessing game
function randomNumberGuessing(userName) {
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
      break;
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
  if(numCorrectlyGuessed)
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

//Multiple) correct answers guessing game
function bondGuessingGame(userName) {
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
  //print the array of possible answers to an alert()
  var prettyPrintSeanConneryBondFilms = '';
  for (var j = 0; j < seanConneryBondFilms.length; j++)
  {
    prettyPrintSeanConneryBondFilms += '  ' + seanConneryBondFilms[j] + '\n';
  }
  alert('For future reference, the complete list of Sean Connery Bond films is: \n' + prettyPrintSeanConneryBondFilms);
  if(bondCorrectlyGuessed)
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

//executable
playGuessingGame();

function playGuessingGame() {
  alert('Hi there. We\'re going to play a guessing game about me!');
  var numberOfQuestions = 7;
  var totalCorrectCounter = 0;
  var userName = prompt('First, let\'s introduce ourselves. What\'s your name?');
  //START-CONSOLE-TESTING
  // console.log('userName: ' + userName);
  //END-CONSOLE-TESTING
  alert('Welcome ' + userName + ', looking good!');
  //realistically I'd define a class called something like "Score" to encapsulate the totalCorrectCounter variable, and pass a reference to an instance of that class to each function, but since we're not using objects yet this felt like the most OOPish way of handling this
  totalCorrectCounter += theRealPaul(userName);
  totalCorrectCounter += hairEnvy(userName);
  totalCorrectCounter += arnoldSchwarzenegger(userName);
  totalCorrectCounter += messier101Spiral(userName);
  totalCorrectCounter += englishBreakfast(userName);
  totalCorrectCounter += randomNumberGuessing(userName);
  totalCorrectCounter += bondGuessingGame(userName);
  alert('Thanks for playing my games. You got a total of ' + totalCorrectCounter + ' out of ' + numberOfQuestions + ' questions right.');
}
