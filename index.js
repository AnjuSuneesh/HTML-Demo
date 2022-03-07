

// (let a= 5 , b=10;
// console.log(typeof age);
// if(a<b){
//     let c=50;
// }

// else{
//     let c=100;
// 
// console.log(c);
/* let user = "John";
 user = "Mike";
 console.log(user); */
 //let userProfile;//Camelcase
 //const COLOR="red";
 //COLOR = "BLUE";

/* console.log(COLOR);
 console.log(5=="5");
 console.log(5==="5");
 console.log("5"==="5");
 console.log('5' ==="5");*/
 // Scoped demonstration
/* let a = 5, b = 10;
if(a > b){
     let c = 50;  //Scope of c is only within the if block
 }
 else{
     let c = 100;
 }
 console.log(c); */

//Redeclaration
/* var user = "John";
var user = "Mike";
console.log(user); */

//let userProfile; //Camelcase

/* const COLOR = "red";
console.log(COLOR); */

//console.log("Test"/0);

/* let a=10, b=20;
console.log(`Sum of a and b is: ${a+b}`); //Expression is always followed by $
let age = null;
console.log(typeof(age));
console.log("Value of a is: "+a + ", Value of b is "+b); */

//console.log('5' == "5"); //Assignment

//let a = 10;
//console.log(++a); //pre increment
//console.log(a++);  //a++ (post increment) : a = a+1;
//a++;
//console.log(a);

let age = 18;

/* if(age > 18 && age>59){
    
         console.log('Eligible to vote and pension');
}   
    else if(age < 60){
        console.log('Wont get a pension now');
    }
else if(age===18){
    console.log('You turned 18');
}
else{
    console.log('Not Eligible to vote');
}
 */
/* switch(age){
    case 18:
        console.log('You turned 18');
        break;
    case 19:
        console.log('Eligible to vote'); 
        break;   
    default:
        console.log('No match');    
} */

//While loop :1.Initialization, 2. condition

/* let count;
for(count =0; count < 15; count++){
    if(count === 10){
        continue;
    }
    console.log(count);
    //count++;
        
} */

/* do{
    console.log(count);
    count++; 
} while(count < 5); */


/* let str = 'Hi how are you?'; 
/* str = 'hi'; 
console.log( str[0] ); */

/* console.log(str.substring(3,10));  //start index, length of original string
console.log(str.substr(3,10));  */


let names = ["John", "Mike", "Peter", "Kevin"];

/* for(let i = 0; i<names.length; i++){
    if(names[i].startsWith('P')){
        continue;
    }
    console.log(names[i]);
} */

/* console.log('before :' +names);
console.log(names.pop());
console.log('After :'+names);
console.log(names.push('Sara'));
console.log('After Push :'+names); */

/* console.log('before :' +names);
console.log(names.shift());
console.log('After :'+names);
console.log(names.unshift('Kia'));
console.log('After Unshift :'+names); */

//let names = ["John", "Mike", "Peter", "Kevin"];
//console.log('Before: '+names);

//console.log(names.slice(0,3));

/* let newNames = names;
newNames.push('Raymond');
console.log('After: '+names);
for(let name of names){  //in will be used to display the index value
    console.log(name);
}
/* names.length = 3;
console.log('After manipulating the length: '+names); */

/*names[36] = 'Test';
console.log('After manipulating the length: '+names);
console.log(names.length) */

/* let hello = function(){   // function hello(){}
    console.log('Hello');
}
console.log(typeof hello);
hello(); */

//FUNCTION EXPRESSION
/* let test =function (a, b) {
    a+b;
    console.log('Arrow function demo');
} */ 

//add(8,9);

//ARROW FUNCTION WITH PARAMETERS
/* let test1 = (a, b) => {
    let c = a+b;
    return c; 
}
console.log(test1(12, 23));
console.log(typeof test1); */

let numbers = [12, 23, 18, 26, 40];

//FILTER
let evenNumbers = numbers.filter(getEven);

function getEven(num){
    return num%2 == 0;
}

console.log('Filtered :' +evenNumbers);

console.log('Original '+numbers);

//MAP
let squaredNum = numbers.map(getSquared)

function getSquared(num){
    return num*num;
}

console.log('Squared: '+squaredNum);

//REDUCE 
let sum = numbers.reduce(getSum, 0);

function getSum(total, num){
    return total+num;
}

console.log("Sum of all numbers: "+sum);




function person(fName,lName,a){//constructor function
    firstName=fName;
    lastName=lName;
    age=a


}