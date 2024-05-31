alert
// var question='How are you';
// console.log(question);

// var question="How are you";
// console.log(question)

// var question=`How are you`;
// console.log(question)

for(var i=0; i<10; i++){
    console.log('How are you')
}

for(var i=0; i<100; i++){
    console.log(`${i}. How are you`)
}

// (i) stands for index and it is a variable and it van be represented by anything


// loop is simple repeating something over and over till a certain condition is met
// There are four types of loop:
//  WHILE; 
// DO WHILE; 
// FOR; 
// FOR EACH

var a=5
a++
console.log(a)

var b=5
b--
console.log(b)

for(var victor=0; victor<=10; victor++){
    console.log('Working')
}

// syntax for FOR:
// for(Start, condition, increament/decreament){
//     output
// }

for(var i=5; i<30; i+=2){
    console.log(i)
}

// NOTE: always:
// .pay attention to the starting point.
// .Pay attention to the value that is beign added(the last variable).
// . Pay attention to the condition.
var x='we are learning'
for(var i=0; i<15; i++){
    console.log(x[i].toUpperCase())
}


// WHILE LOOP SYNTAX
/*
    Start
    while(condition){
        output
        increament/decreament
    }
*/
console.log("----whileloop----")
var i=0;
while (i<=23){
    console.log(i);
    i++
}

var x='john is a program';
var i=0
while(i < 17){
    console.log(x[i].toUpperCase());
    i++;
}

for(var i=10; i>=0; i--){
    console.log(i)
}

var i=10;
while (i>=0){
    console.log(i);
    i--
}

// DO WHILE loop syntax
/* start;
do{
    output
    increament/decreament
}while(condition)
*/

// as you change the condition, the output also changes

console.log('------DO WHILE------')
var i=1
do{
    console.log(`${i}. Working`)
    i++
}while(i<11)    

    var x=100
    do{
        console.log(x)
        i++
    }while(x<10)

// the "DO" executes the console.log befor confirming the output(WHILE)

/* Differences between FOR, WHILE and Do
.FOR is used for making a finite condition
.WHILE is used for making infinite condition
.DO is used for completing a finite action
*/