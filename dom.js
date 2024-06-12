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
    // let len=Surname.value.length
    // console.log(len)
    if (Surname.value.length<5){
        console.log('ERROR')
    }else {
        console.log(Surname.value);    
    }
    if (FirstName.value.length<5){
        console.log('ERROR')
    }else {
        console.log(FirstName.value)
    }

    if (Password.value !== Confirmpassword.value){
        console.log('Check password again')
    }else {
        console.log('Logged-in')
    }
    if (Gender.value !== 'man'){
        console.log('You are not eligible for this website.')
    }else {
        console.log('You have been registered')
    }
    console.log(Email.value);
    // if (Confirmpassword !== Password){
    //     console.log('ERROR')
    // }
    
    // console.log(FirstName.value);
    // console.log(Password.value);
    // console.log(Confirmpassword.value);
    return false;
}
