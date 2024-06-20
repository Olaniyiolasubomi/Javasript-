"Use Strict"
var current=new Date()
console.log(current)
/*the above is used for checking the current time and date.
the time in computer started in the year 1970.
*/

var current=new Date(0)
console.log(current)
/*
Adding 24hrs to january 1st 1970.
*/

let oneday=60*60*24*1000
var currentday=new Date(oneday)
console.log(currentday)


let onenight=1000/60/60/24
var currentday=new Date(onenight)
console.log(currentday)


let onenoon=-60*60*24*1000
var currentday=new Date(onenoon)
console.log(currentday)

let birthdate='2008-04-22';
var birthday=new Date(birthdate);
console.log(birthday);
console.log(birthday.getFullYear());
console.log(birthday.getMonth());
console.log(birthday.getDate());