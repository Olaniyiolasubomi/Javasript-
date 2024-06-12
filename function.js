"use strict"
// Function is clasified into two in JavaScript:
// Built-in e.g alert, prompt, console.log  AND
// Custom Function 
// There are three types of custom function:
// Declarative function,
// Anonymous function, and
// Call-back or Arrow function.
/* Declarative function is sub-classified into four:
with parameter,
without parameter,
with scope,
with return.
*/

// SYNTAX FOR DECLARATIVE FUNCTION
// function name(){
//     output
// }
// calling/invoke

function add(){
    console.log(5+2)
}
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
// function helps us to do DRY
// DRY means Do not Repeat Yourself 

function studentInfo2(name, course){
    // var name = 'John'
    // var course = 'Js'
    console.log(`${name} is studying ${course}`)
}
studentInfo2('John', 'Python')
studentInfo2('James', 'SQL')
studentInfo2('Daniel', 'UI/UX')
studentInfo2('David', 'Web designing')
studentInfo2('Favour', 'Animation')
studentInfo2('Faith', 'Graphic design')
// studentInfo2()

// NOTE: the contents in the bracket are called arguements or parameters


function studentData(name='John', age=20){
    console.log(`${name} is ${age} years old`)
}
studentData('Daniel', 50)
studentData('John', 56)
studentData('James', 23)
studentData('Daniel', 34)
studentData('David', 43)
studentData('Favour', 48)
studentData('Faith', 23)
studentData()


// RETURN
console.log('-----RETURN----')

// function addValue(a, b){
//     return a+b  
// }
// console.log(addValue(5,3))
// result = addValue(5,3)
// console.log(result+7)

function times(a){
    return a*3
}
console.log(times(7))

// ANONYMOUS function
var life=function (){
    console.log('Wonder')
}
console.log(typeof(life))
life()

var food=function addValue(s, f){
    console.log(27)
}
console.log(typeof(food))
food()

// age=prompt('Please Enter Your Age')
// serviceage=prompt('Please enter the amount of years you have worked')
// if (age <65 && age>=25 && serviceage<35){
//     console.log('You are still eligible to work')
// }else if (age >=65 && serviceage>=35){
//     console.log('Thank you for your addition to the organization but you are no longer needed')
// }else if (age <65 && serviceage>=35){
//     console.log('Thank you for your addition to the organization but you are no longer needed')
// }else{
//     console.log('Please refresh the page and fill in your information')
// }

// if(serviceage<35){
//     console.log('You are still eligible to work')
// }else if (serviceage>=35){
//     console.log('Thank you for your addition to the organization but you are no longer needed')
// }

// var current=new Date()
// var yearofbirth=prompt('Which year where you born');
// var yearofemployment=prompt('Which year where you employed');
// var serviceage=function(current, yearofemployment){
//    return current-yearofemployment
// }
// var age=function(current, yearofbirth){
//     return current-yearofbirth
// }
// if (age <65 && age>=25 && serviceage<35){
//     console.log('You are still eligible to work')
// }else if (age>=65 && serviceage>=35){
//     console.log('Thank you for your addition to the organization but you are no longer needed')
// }else if (age <65 && serviceage>=35){
//     console.log('Thank you for your addition to the organization but you are no longer needed')
// }else{
//     console.log('Please refresh the page and fill in your information')
// }



var current=new Date()
var yearofbirth = prompt('Which year where you born');
var yearofemployment = prompt('Which year where you employed');
var serviceage = function(current, yearofemployment){
    return current-yearofemployment
};
var age = function(current, yearofbirth){
    return current - yearofbirth
};
var currentage = age(current, yearofbirth);
var currentserviceage = serviceage(current, yearofemployment);
    if(currentage<65 && currentage>=25 && currentserviceage<35){
        console.log('You are still eligible to work');
    }else if(currentage<25 && currentserviceage<=35){
        console.log('You are not eligible to work yet');
    }else if(currentage<25 && currentserviceage>=35){
        console.log('You are not eligible to work yet');
    }else if(currentage>=65 && currentserviceage>=35){
        console.log('Thank you for your addition to the organization but you are no longer needed');
    }else if(currentage<65 && currentserviceage>=35){
        console.log('Thank you for your addition to the organization but you are no longer needed');
    }else{
        console.log('Please refresh the page and fill in your information');
    };


// ARROW FUNCTION

/*
let form = function(a,a,......,an){
    console.log
}
arrow function=
let form = (a1, a2, a3, a4,........, an)=>expression
*/
let sum = (m,n)=>m+n
console.log(typeof(sum))
console.log(sum(5,2))

add = function(a,b){
    return a+b
}
console.log(add(5,2))

let square = (x)=>x*2
console.log(square(8)) 

// let string=(y)=>y.toUpperCase();
// console.log(string('God is good'));
var name=prompt('What is your name?');
var age=prompt('How old are you?');
// let string=(a)=>prompt('What is your name?');
// let age=(b)=>prompt('How old are you?');
let studentinfo=(name,age)=>(`${name} is ${age} years old`);
console.log(studentinfo(name,age));