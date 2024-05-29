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


var myName = prompt(`Enter your name`)
switch(myName){
    case  'John':
    console.log('Student');
    // break;

// break is uses to stop the condition
// default serves as else
    case 'Abraham':
    console.log('Teacher');
    break;

    case 'Victor':
    console.log('Programmer');
    break;
    
    case 'Nicolas':
    console.log('Web designer');
    break;
    
    case 'Joseph':
    console.log('Ai programmer');
    break;
    
    default:
    console.log('Who are you');
    break;
}
// break is used to stop the condition from continuing