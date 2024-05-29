alert
// Using if, else if, and else, create a basic app that assign a house to student based on their age bracket
// Group A 9-11 years old: Red house 
// Group B 12-14years old: Yellow house
// Group C 15-17years old: Green house
// Group D 18-19years old : Blue house

var studentName=prompt('Please Enter Your Name')
var studentAge=prompt('Please Enter Your Age')
if(studentAge<9){
    console.log(`${studentName} Please wait till you are of age`)
}else if(studentAge>=9 && studentAge<=11){
    console.log(`${studentName} You are in Red House`)
}else if(studentAge>=12 && studentAge<=14){
    console.log(`${studentName} You are in Yellow House`)
}else if(studentAge>=15 && studentAge<=17){
    console.log(`${studentName} You are in Green House`)
}else if(studentAge>=18 && studentAge<=19){
    console.log(`${studentName} You are in Blue House`)
}else if(studentAge>19){
    console.log(`${studentName} should meet House master`)
}

//TAKE HOME ASSIGNMENT
// do this with switch