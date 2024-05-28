var noun = prompt('What is your name?/你叫什么名字');
var name = noun;
var verb = prompt('What are you doing?');
var action = verb;
var verb = prompt('Please enter a verb');
var nextAction = verb;
var adjective = prompt('Please type an adjective.');
var describe = adjective;
var chinese = prompt('Please type or copy a chinese character.')
var character = chinese;
var country = prompt('Please enter the name of a country.');
var place = country;
var time = prompt('Please enter a time(Day, Week, Month, Year, o\'clock).')
var when = time;
var nounThing = prompt('Please enter a noun.')
var personal = nounThing;
alert("You\'re all done. Ready for the answer?");
var story = name + ' is who you are ' + action + '.';
story += ' The world thinks you\'re ';
story += describe + '. ';
story += ' It seems like you\'re getting somewhere, but ';
story += name;
story += ' Still feels very confused. ';
story += nextAction.toUpperCase();
story += ' is what you do when you\'re '
story += describe + '. ';
story += chinese;
story += ' is the chinese character for ';
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