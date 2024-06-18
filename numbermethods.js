"use strict"
let number= 2.1
let digit= -1.1
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.round(number))
console.log(Math.trunc(number))
/* 
*FLOOR will take you the nearest whole number
*CEIL will take you to the nearest whole number
*ROUND will round up to the nearest whole number
*TRUNC will cut of the decimal
*/
console.log(Math.floor(digit))
console.log(Math.ceil(digit))
console.log(Math.round(digit))
console.log(Math.trunc(digit))

let value=1.234567
console.log(Math.round(value*100)/100)
console.log(value.toFixed(3))

let x=4
console.log(Math.pow(2,4))
let min=20.34
let max= 50.67
// console.log(Math.floor(Math.random()*(max-min)+min))
// console.log(Math.floor(Math.random()*10)+1)

// console.log(Math.floor(Math.random()*21))

let mini=0
let maxi=20
console.log(Math.floor(Math.random()*(maxi-mini+1))+mini)