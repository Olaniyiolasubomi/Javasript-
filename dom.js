"use strict"
document.getElementById('head').style.color='red';
document.getElementById('body').style.color='green';


function submitform(){
    let Surname=document.getElementById('Surname');
    let FirstName=document.getElementById('firstname');
    let Email=document.getElementById('Email');
    let Password=document.getElementById('password');
    let Confirmpassword=document.getElementById('Confirm password');
    let Gender=document.getElementById('Gender');
    if (Surname.value.length<5){
        console.log('ERROR')
    }else {
        console.log(Surname.value);    
    }
    if (Surname.value.length<5){
        console. log('ERROR')
        Surname.style.borderColor='red';
    }else {
        Surname.style.borderColor='green';
    }
    if (FirstName.value.length<5){
        console.log('ERROR');
        FirstName.style.borderColor='red';
    }else {
        console.log(FirstName.value);
        FirstName.style.borderColor='green'
    }
    if (Password.value !== Confirmpassword.value && Password.value<8){
        console.log('Check password again')
        Password.style.borderColor='red'
    }else {
        console.log('Logged-in')
        Password.style.borderColor='green'
    }
    if (Gender.value !== 'man'){
        console.log('You are not eligible for this website.')
    }else {
        console.log('You have been registered')
    }
    console.log(Email.value);
    return false;
}