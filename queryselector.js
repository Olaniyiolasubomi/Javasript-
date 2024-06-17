// document.querySelector('#demo').style.color='blue'
// document.querySelector('#demo').style.backgroundColor='pink'
// document.querySelector('#fasting').style.color='greenyellow'
// document.querySelector('#fasting').style.backgroundColor='blue'
// document.querySelector('#naruto').style.color='blue'
// document.querySelector('#naruto').style.backgroundColor='beige'
// document.querySelector('#spiderman').style.color='white'
// document.querySelector('#spiderman').style.backgroundColor='black'


// document.querySelectorAll('h1')[0].style.color='yellow'
let x=document.querySelectorAll('h1')
for (i=0; i<x.length; i++){
    x[i].style.color='red'
}
for (i=0; i<x.length; i++){
    x[i].style.backgroundColor='yellow'
}

let y=document.querySelectorAll('p')
for (i=0; i<y.length; i++){
    y[i].style.color='blue'
}