alert
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

function addValue(a, b){
    return a+b  
}
console.log(addValue(5,3))
result = addValue(5,3)
console.log(result+7)

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

age=prompt('Please Enter Your Age')
if (age <65 && age>25){
    console.log('You are still eligible to work')
}else if (age >=65){
    console.log('You have reached the age range for retirement so please retire now.')
}