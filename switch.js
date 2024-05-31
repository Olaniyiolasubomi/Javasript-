alert
// the syntax for switch is:
// swith(condition){
    // case 1:
    // output;
    // break;

    // case 2:
    // output;
    // break;

    // case 3:
    // output;
    // break;
    
    // default:
    // output;
    // break;
// }


// var myName = prompt(`Enter your name`)
// switch(myName){
//     case  'John':
//     console.log('Student');
//     // break;

// // break is uses to stop the condition
// // default serves as else
//     case 'Abraham':
//     console.log('Teacher');
//     break;

//     case 'Victor':
//     console.log('Programmer');
//     break;
    
//     case 'Nicolas':
//     console.log('Web designer');
//     break;
    
//     case 'Joseph':
//     console.log('Ai programmer');
//     break;
    
//     default:
//     console.log('Who are you');
//     break;
// }
// break is used to stop the condition from continuing


var myName = prompt('Please Enter Your Name')
var myAge = prompt('Please Enter your Age')
var message;
switch(true){
    case myAge<9:
    message=`${myName}, please wait till you are of age`;
    break;

    case myAge>=9 && myAge<=11:
    message=`${myName}, you are in Red House`;
    break;

    case myAge>=12 && myAge<=14:
    message=`${myName}, you are in Yellow House`;
    break;

    case myAge>=15 && myAge<=17:
    message=`${myName}, you are in Blue House`;
    break;

    case myAge>=18 && myAge<=19:
    message=`${myName}, you are in Green House`;
    break;

    case myAge>19:
    message=`${myName}, please meet the house master`;
    break;

    default:
    message='The school authority wants to see you for your misbehaviour';
    break;
}
console.log(message);