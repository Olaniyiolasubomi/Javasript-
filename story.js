var noun = prompt('What is your name?');
var name = noun;
var verb = prompt('What are you doing?');
var action = verb;
var verb = prompt('Please enter a verb');
var nextAction = verb;
var adjective = prompt('Please type an adjective.');
var describe = adjective;
var country = prompt('Please enter the name of a country.');
var place = country;
var time = prompt('Please enter a time(Day, Week, Month, Year, o\'clock).')
var when = time;
var nounThing = prompt('Please enter a noun.')
var personal = nounThing;
alert("You\'re all done. Ready for the answer?");
var story = name + ' loves ' + action + '.';
story += ' The people around you thinks you\'re ';
story += ' keeping up the good work is what has made you who you arehhb ';
story += name;
story += ' Still feels very confused. ';
story += nextAction.toUpperCase();
story += ' is what you do when you\'re '
story += describe + '. ';
story += personal + '. ';
story += 'Being single allows for a lot of traveling to ';
story += place + '. ';
story += when;
story += ' is an extremely awful time for ';
story += action;
story += ' This is the end of the story.';

document.write(story);
console.log(story);
console.log(story.length)