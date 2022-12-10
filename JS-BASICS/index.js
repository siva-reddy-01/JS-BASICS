//*****************varabiles***********************************************************
/*var name='Shiva'
let a='Reddy'
console.log(name);
console.log(a); */

//cannot be reserved keyword
//should be meaningful
//cannot start number(1name)
//cannot contaion space or hypen (-)
// Are case sensitive
// Ex:- FirstName,firstName;


//*******************Constants**********************************************************

/* let intersetRate=0.3;
intersetRate=1;
console.log(intersetRate); */



//Error
/*const intersetRate=0.3;
intersetRate=1;
console.log(intersetRate); */

//we cannot re-assign the constants

//***************************************Primitive - Types******************************

/* let name="Shiva"; // String Literal
let age=21; //number Literal
let isApproved=false; //Boolean Literal
let firstName="Reddy"; 
let selectedColor=null; */


/*
//***************************Objects****************************************************

let person = {

    name:'Shiva',
    age:21

};

//to change the name we can use Dot Operation
person.name='Reddy'

//another way to change name Bracket notation

person["name"]="Anitha"

console.log(person.name);  */


/*
//****************************ARRAYS***************************************************

let selectedColors=['red','blue'];
selectedColors[2]='green';
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);  */


//*****************************FUNCTIONS*************************************************

/*
function greet() {
    console.log("Hello World");
}
greet(); 

function greet(name,lastName) {
    console.log('Hello '+name+' '+lastName);
}
greet('Reddy','Jagan');  

function square(number) {

    return number*number;
}

console.log(square(2));  */


//******************************JAVA SCRIPT OPERATORS************************************************

//1.ARITHMETIC OPERATORS

/*let x=10;
let y=3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(x++);
console.log(++x);
console.log(x--);  */

//2.Assignment operators

/*let x=10;
x=x+5;
x+=5;
console.log(x); */

//3.Comparsion Operators

/*let x=10;

console.log(x>5);
console.log(x>10);
console.log(x==10);
console.log(x!=10);  */

//4.Equality Operator

/*

//Strict Equality(Type+Value)
console.log(1===1);
console.log('1'===1);

//Loose Equality
console.log(1==1);
console.log('1'==1);    */

//4.Ternary Operators

/*let points=101;
let type=points>100 ? 'gold' : 'Silver';
console.log(type); */

//5.LOGICAL OPERATORS WITH NON-BOOLEANS

//LOGICAL AND(&&)
//RETURNS TRUE if both operands are true

//LOGICAL OR(||)
//RETURNS TRUE if only one operand is true

//NOT(!)

/*let highIncome=true;
let goodCreditScore=true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); */

//Fasly(False)
//undefined
//null
//0
//NaN
// Anything that is not Fasly -> Truthy



//8.BITWISE OPERATORS
//Bitwise &
//Bitwise |

//Swapping of two numbers

/*let a='Blue'
let b='Green'

let temp=a;
    a=b;
    b=temp;


console.log(a);
console.log(b); */


//*****************************************CONTROL FLOW*****************************************************

//If Else
/*let hour=11;

if(hour>=6 && hour<=10) {
    console.log('Good Morning');
}
else if(hour===10) {
    console.log('Good Morning');
}
else {
    console.log('Good Evening');
} */

//Switch Case

/*let role='guest';

switch(role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderate':
        console.log('Moderate user');
        break;
    default:
        console.log('Unknown User');
} */

//LOOPS
//FOR LOOP
/* for(let i=0;i<5;i++) {

    console.log('Hello World',+i);

}

for(let i=1;i<=5;i++) {
    if(i%2==0) console.log(i);
}
   */


//WHILE LOOP

/*let i=1;
while(i<=5) {

    if(i%2!==0) {
        console.log(i);
    }
    i++;
}*/

//do-while loop
/*let i=0;
do {
    if(i%2!==0) {
        console.log(i);
    }
    i++;
}while(i<=5); 

//infinite loop
let i=0;
while(i<5) {
    console.log(i);
    i++;
}

while(true) {

}

let x=0;
do{
    ++x;
}while(x<5);  */

//for-in loop
//to display all the properties of the object we use for-in loop

/* const person ={
    name:'Reddy',
    age:30
};

for(let key in person) {
    console.log(key,person[key]);
}

const colors=['Blue','while','Green'];
for(let index in colors) {
    console.log(index,colors[index]);
}


//for-of Loop

for(let color of colors) {

    console.log(color);
}  */

//Break and Contiune

/*let i=0;

while(i<=10) {
    if(i==5) break;
    if(i%2==0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}  */

//**************************************************OBJECTS***************************************************

//Object-Oriented Programming (OOP)
/*
const circle= {
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }

};

circle.draw();  //Method */

//********Factory Functions**************
//By creating two same objects repating logic is not necessary but by using Factory functions we can create same objects with out repating the logic
//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

/*function createCircle(radius) {
    return{
        radius,
        draw() {
            console.log('draw');
        }
    }
};

const circle1=createCircle(1);
console.log(circle1);

const circle2=createCircle(2);
console.log(circle2);  */

//**************Constructor Function*****************

//Pascal Notation
/*function Circle(radius) {
    this.radius=radius;
    this.draw=function() {
        console.log('draw');
    }
}

const circle=new Circle(1); */

//******************Dynamic Nature of Objects*************

/*const circle={
    radius:1
};

circle.color='yellow';
circle.draw=function() {}

delete circle.color;
delete circle.draw;

console.log(circle); */

//****************Values vs ReferenceTypes********************

//Values{Number,String,boolean,Symbol,undefined,null}
//Reference Types{Object,Function,Array}

/*let x=10;
let y=x;
x++;
console.log(x);
console.log(y);



let obj ={value:10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); */


//*******Enumerating Properties of an Object***************

/*const circle={
    radius:1,
    draw() {
        console.log('draw');
    }
};

for(let key in circle)
   console.log(key,circle[key]); */



//Cloning an Object
/*const circle={
    radius:1,
    draw() {
        console.log('draw');
    }
};

//...Speard operator is used to put properties/attribures from one object to another object
const another={...circle};
console.log(another);

//Garbage Collections
let a={ };
console.log(a); */

//Math Function

/*console.log(Math.PI)
console.group(Math.max(1,2,3,4,5))
console.group(Math.min(1,2,3,4,5))
console.log(Math.round(1.6)) */

//*********String Functions***************

/*
//String Primitive
const message='hi';
console.log(message);

//String Object
const another=new String('hi');
console.log(another);   */

//**********Date****************

/*
const date=new Date();
date.getFullYear(2022)
console.log(date);  */

//Exercise 1 Address Object
//state
//city
//zipcode
//showAddress(address)

/*
let address={
    state:'a',
    city:'b',
    zipcode:'c'
};

function showAddress(address){
    for(let key in address)
       console.log(key,address[key]);
}

showAddress(address);   */

//Exercise Factory and Constructor Function

/*
let address=createAddress('a','b','c');
console.log(address);

//Factory Function
function createAddress(street,city,zipcode) {
    return{
        street,
        city,
        zipcode
    };
}

//Constructor Function

let address1=new Address('Y','S','R')
console.log(address1)
function Address(street,city,zipcode) {
    this.street=street,
    this.city=city,
    this.zipcode=zipcode
}
                                      */


//Exercise Object Equality


/*let address1=new Address('J','A','G');
let address2=new Address('J','A','G');
let address3=address1;

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));


function Address(state,city,zipcode) {
    this.state=state,
    this.city=city,
    this.zipcode=zipcode
}

function areEqual(address1,address2) {
    return address1.state === address2.state &&
           address1.city === address2.city &&
           address1.zipcode === address2.zipcode;
}

function areSame(address1,address2){
    return address1.state === address2.state &&
           address1.city === address2.city &&
           address1.zipcode === address2.zipcode;

}  */

//Exercise Blog Post
//title
//body
//author
//views
//comments
//(author,body)
// isLive

/*let post={
    title:'a',
    body:'b',
    author:'c',
    views:10,
    comments:[
        {author:'a',body:'b'},
        {author:'c',bosy:'d'},
    ],
    isLive:true
};

console.log(post); */

//Exercise Constructor Functions


/*let post=new Post('a','b','c')
console.log(post);

function Post(title,body,author){
    this.title=title,
    this.body=body,
    this.author=author,
    this.views=0,
    this.comments=[],
    this.isLive=false
}  */


//***********************************ARRAYS**************************************************************************
//***************Adding elements into an Array********************

/*
const numbers=[3,4];

//End
numbers.push(5,6);

//Beginning
numbers.unshift(1,2);

//middle
numbers.splice(2,0,'a','b');

console.log(numbers);  */

//************Finding Elements Primitives********************

/*const numbers=[1,2,3,1,4];

console.log(numbers.indexOf(1,2));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1)!==-1);
console.log(numbers.includes(1));  */


//***********Finding Elements Reference Types***************

/*
const courses=[
    {id:1,name:'a'},
    {id:2,name:'b'}
];

                     //find
const course=courses.findIndex(function(course) {

    return course.name==='a';

});

console.log(course);   */


//*******************ARROW FUNCTIONS**************************

/*const courses=[
    {id:1,name:'a'},
    {id:2,name:'b'}
];

const course=courses.find(course => course.name=='a');
console.log(course);   */


//*********************Removing the Elements********************
/*
const numbers=[1,2,3,4];

//End
const last=numbers.pop();
console.log(last);

//Beg
const first=numbers.shift();
console.log(first);

//Middle
const middle=numbers.splice(1,1);
console.log(middle);                      */

//*************************Emptying of an Array***********************

/*
let numbers=[1,2,3,4];
let another=numbers;

//solution 1
numbers=[];

//solution 2
numbers.length = 0;

//solution 3
numbers.splice(0,numbers.length)

//solution 4
while(numbers.length>0)
  numbers.pop()

console.log(numbers);
console.log(another);    */


//***************COMBINING AND SLICING ARRAYS********************

/*const first=[1,2,3];
const second=[4,5,6];

const combined=first.concat(second);
console.log(combined);

const slice=combined.slice(2,4);
console.log(slice);   */

//**************Iterating an Array*********************

/*
const numbers=[1,2,3];
for(let number of numbers)
   console.log(number);

numbers.forEach((number,index) =>console.log(index,number));  */


//*************** Joining Of an Array***********************

/*const numbers=[1,2,3];
const joined=numbers.join(',');
console.log(joined);

const message='This is my first Message';
const parts=message.split(' ');
console.log(parts);

const combined=parts.join('_');
console.log(combined);   */


//*******************SORTING ARRAY****************************
/*
const numbers=[3,4,1];
numbers.sort();
numbers.reverse();
console.log(numbers);

const courses=[
    {id:1,name:'Node.js'},
    {id:2,name:'JavaScript'}

];

courses.sort(function(a,b){
    //a<b==>-1
    //a>b==>1
    //a==b 0

    if(a.name<b.name) return -1;
    if(a.name>a.name) return 1;
    return 0;

});
console.log(courses);   */


//************Filtering an Array******************
/*
const numbers=[1,-1,2,3];
const filtered=numbers.filter(n => n>=0 );

console.log(filtered);   */

//*******************Mapping of An Array*************

/*const numbers=[1,-1,2,3];
const filtered=numbers.filter(n => n>=0);

const items=filtered.map(n => '<li>' +n+ '</li>');
 const html='<uml>' +items.join()+ '</uml>'

console.log(html);  

const items=filtered.map(n => obj={ value:n });

console.log(items);   */

//Exercise Array from Range

/*const numbers=arrayFromRange(-10,-4)
console.log(numbers);

function arrayFromRange(min,max) {

    output=[];
    for(let i=min;i<=max;i++)
      output.push(i);
      return output;
}  

//Exercise Includes

const numbers=[1,2,3,4];
console.log(numbers.includes(1));

function includes(array,searchElement) {

    for(let element of array)
       if(element===searchElement)
       return true;
    return false;

}  */


//*********************************************FUNCTIONS**********************************************

/*
//Function Declaration
function walk() {
    console.log('walk');
}

//Named Function Expression
let run=function run() {
    console.log('run');
};


//Anonymous Function Expression
let move=function() {
    console.log('move');
}

let slow=move;
slow();
move();
walk();
run();   */


//*****Arguments*****
/*
function sum() {
    let total=0;
    for(let value of arguments)
       total+=value;
    return total;
}

console.log(sum(1,2,3,4));  */

//****Rest Operator****
/*
function sum(args){
    console.log(args);

}

console.log(sum(1,2,3,4,5));  */

//***Default Parameter***
/*
function interset(principal,rate,years){
    return principal * rate/100 * years;
}

console.log(interset(10000,3.5,5)); 

function sum(a,b,c){
     b=b||5;
    c=c||5;  

    return a+b+c;
}
console.log(sum(5));  */


//*****Getters & Setters****** && Try&Catch
//getters => access properties
//setters => change (mutate) them

/*

const person = {

    firstName:'shiva',
    lastName:'Reddy',
    get fullName() {
        return '${person.firstName} ${person.lastName}';
    },

    set fullName(value) {

        if(typeof value!=='string')
           throw new Error('Value is not a String');

        const parts=value.split(' ');

        if(parts.length !==2)
           throw new Error('Enter first and last name');
        this.firstName= parts[0];
        this.lastName= parts[1];
    }
};

try {
    person.fullName='';
}
catch(e) {
    alert(e);
}

console.log(person);  */

//*******Local vs Global Scope*********
/*
const color='red'; //global var

function start() {
    const message='hi';
    const color='green'; //local var
    console.log(color);
}

function stop() {
    const message='bye';
}

start();
stop();   */

//***********Let vs Var****************

/*function start() {
   // for(let i=0;i<5;i++) {
     for(var i=0;i<5;i++) {
        console.log(i);
    }
    console.log(i); //Error if use let
}
start(); */

//************This Keyword*************

//method->object
//function -> global(window, global)

/*const vedio={
    title:'a',
    play() {
        console.log(this);
    }

};

vedio.play('a');  */

//Exercise 1-Sum of arguments

/*console.log(sum(1,2,3,4,5));

function sum(...items) {

    if(items.length===1 && Array.isArray(items[0])) {
        items=[...items[0]];
    }else {
        return items.reduce((a,b) => a+b);
    }
          

}  */


//Exercise Area of circle

/*const circle={

    radius:1,
    get area() {

        return Math.PI*this.radius*this.radius;
    }
};

console.log(circle.area);  */


                                        // ***THANK YOU***











