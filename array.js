alert
// These two can be used to achive the same thing
var friends=["Adam","Zeus","Poseidon","Saski","Gaara ",];
friends.push('Ogun');
friends.unshift('Ogun');
friends.pop();
friends.shift();
// You use push to add to the end of the array
// unshift add to the begining
// pop remove from the end
// shift remove from the beginning
console.log(friends);
// var friends=Array("Adam","Zeus","Poseidon","Saski","Gaara ",)
// console.log(typeof(friends))
// console.log(friends)
console.log(friends[0].toUpperCase());

var family=[ "Dieko","Okiki","Oyin"];
// the joining of two things together is called contactination
var relationship=friends+family;
console.log(relationship);

var number=[20, "JavaScript", 34, "Web designing", 40, "Animation", ["David", "Divine", "Mokolade"], 15, "Advanced Excell"];
console.log(number);
console.log(number[6][1]);

var list=[1,2,['a','b',['cat','dog','goat',],'Js','php'],'Abj','En'];
console.log(list);
console.log(list[2][2][0]);

var friends=["David", "Divine", "Mokolade","Oba ",];
console.log(friends);
for(var i=0; i<friends.length; i++){
    console.log(`${friends[i].toUpperCase()} is my coding friend`)
}

console.log('LIFE')

var friends=["David", "Divine", "Mokolade","Oba",];
friends.push('Eunice')
friends.push('Ene')
friends.push('Zainab')
friends.push('Tonia')
console.log(friends);
for(var i=friends.length; i>=0; i--){
    console.log(`${friends[i]} is my coding friend`)
}
