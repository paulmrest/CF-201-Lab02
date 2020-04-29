'use strict'

alert('Welcome to my page. We\'re going to play a game');

var userName = prompt('What\'s your name?');
//START-CONSOLE-TESTING
// console.log('userName: ' + userName);
//END-CONSOLE-TESTING

if (userName.toLowerCase().startsWith('a') ||
  userName.toLowerCase().startsWith('e') ||
  userName.toLowerCase().startsWith('i') ||
  userName.toLowerCase().startsWith('o') ||
  userName.toLowerCase().startsWith('u'))
{
  alert('Lucky you didn\'t have to live through The Great Vowel Shift. That would have been most confusing!')
}
else if (userName.length == 7)
{
  alert('Seven letters in your name. What a charmed life. ' + userName + ', may your stay here continue that.');
}

if (userName.toLowerCase().startsWith('p'))
{
  alert('Welcome to a fellow P-person. Enjoy your stay ' + userName);
}
else
{
  alert('Welcome ' + userName + ', enjoy your stay at my site.');
}

var macBethMuppet = prompt('If you were stage a production of The Scottish Play with Muppets, who would play the lead role?');
//START-CONSOLE-TESTING
// console.log('macBethMuppet: ' + macBethMuppet);
//END-CONSOLE-TESTING


if (macBethMuppet.toLowerCase().includes('kermit'))
{
  alert('Well, you\'ve got the green with envy part down already.');
}
else if (macBethMuppet.toLowerCase().includes('piggy'))
{
  alert('Delusions of grandure no pig has reached before!');
}
else if (macBethMuppet.toLowerCase().includes('gonzo'))
{
  alert('That nose would be perfect for scrubbing sturbborn spots from stained clothing!');
}
else {
  alert('I don\'t know that character, but I\'m just a simple algorithm. I\'m sure ' + macBethMuppet + ' would give a powerful preformance.');
}

var twoPastaServings = prompt('When making pasta for two, how much is the correct amount of pasta to cook?');
//START-CONSOLE-TESTING
// console.log('twoPastaServings: ' + twoPastaServings);
//END-CONSOLE-TESTING
var randomNumber = Math.round(Math.random());
if (randomNumber == 0)
{
  alert('Wrong! ' + twoPastaServings + ' is not nearly enough pasta for two people.');
}
else
{
  alert('Wrong! ' + twoPastaServings + ' is way too much pasta for two people.');
}

var pastaSauce = prompt('What\'s the best sauce for your ' + twoPastaServings + ' of pasta that you\'ll eat with ' + macBethMuppet + ' while discussing why they should get the part?');
//START-CONSOLE-TESTING
// console.log('pastaSauce: ' + pastaSauce);
//END-CONSOLE-TESTING

var trinket = prompt('Oh no! ' + macBethMuppet + ' just spilled ' + pastaSauce + ' all over your white tablecloth. Since you\'re petty, what meaningless trinket will you pay them with for being your play?');
//START-CONSOLE-TESTING
// console.log('trinket: ' + trinket );
//END-CONSOLE-TESTING

alert('Whoops! It\'s a few months later and ' + macBethMuppet + ' found out that the ' + trinket + ' you gave them is worth more than you\'ll earn in your entire lifetime. So they\'re not going do your play anymore. Enjoy your ' + twoPastaServings + ' of pasta and ' + pastaSauce + '. Better luck next time ' + userName + '.');