// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector("button");
// let div = document.querySelector(".out");

// button.onclick = function(){
//    console.log("работает");
//    // console.log(inputIn.value);
//    let b = +inputIn.value; //плюс показывает что значение-число
//    console.log(b+10);
//    div.innerHTML = b;
//    inputIn.value = "";
// };



// 1)
// let a = 7;
// let b = 9;
// console.log(a * b);


// 2)

// let c = 7;
// let d = 9;
// document.querySelector('.out').innerHTML = c / d;

// 3)
// let e = 3;
// let f = 5;
// document.querySelector('.out').innerHTML = e + f;

//4
// let e1 = "3";
// let f1 = 5;
// document.querySelector('.out').ineerHTML = e1 / f1; //строка и число

//5
// let e2 = 3;
// let f2 = 0;
// document.querySelector('.out').innerHTML = e2 / f2; //infinity

//6
// let e3 = 3;
// let f3 = "Hello";
// document.querySelector('.out').innerHTML = e3 + f3;

//7
// let e4 = 3;
// let f4 = 'Hello';
// document.querySelector('.out').innerHTML = e4 * f4; //NaN - not a number

//8
// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');

// button.onclick = function(){
//    let v = inputIn.value;
//    console.log(v);
// }; 


//9
// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let x = document.querySelector('.out');

// button.onclick = function(){
//    let c = inputIn.value;
//    x.innerHTML = c;
//    inputIn.value = '';
// };


//10
// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function(){
//    let r = inputIn.value;
//    div.innerHTML = r*10;
//    inputIn.value = '';
// };

//11
// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function(){
//    let r = inputIn.value;
//    div.innerHTML = r+10;
//    inputIn.value = '';
// };

//12
// let input1 = document.querySelector('.input-in');
// let input2 = document.querySelector('.input-in2');
// let button = document.querySelector('button');

// button.onclick = function(){
// let a = input1.value;
// let b = input2.value;

// console.log("Hello"+ a + b );
// };


//13
// let input1 = document.querySelector('.input-in');
// let input2 = document.querySelector('.input-in2');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function(){
// let a = +input1.value;
// let b = +input2.value;
// div.innerHTML = a + b;
// };

// 14
// let inputIn = document.querySelector('.input-in');
// inputIn.value="Hello";


// 15
// let y = document.querySelector(".input-in");
// y.style.border = '2px solid red';


// 16
// let input1 = document.querySelector('.input-in');
// let input2 = document.querySelector('.input-in2');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function(){
// let a = input1.value;
// let b = input2.value;
// div.innerHTML = a + b;
// };

// 17
// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector('button');

// button.onclick = function(){
// let t = inputIn.value;
// t = parseInt(t);
// console.log(t);
// };


// 18

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');

// button.onclick = function(){
//    let t = inputIn.value;
//    t = parseFloat(t);
//    console.log(t);
//    document.querySelector('.out').innerHTML = t;
// };

// 19
// let inputIn1 = document.querySelector('.input-in');
// let inputIn2 = document.querySelector('.input-in2');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function(){
// let a = inputIn1.value;
// let b = inputIn2.value;
// a = parseInt(a);
// b = parseInt(b);
// div.innerHTML = a + b;
// };

// 20
let inputIn1 = document.querySelector('.input-in1');
let inputIn2 = document.querySelector('.input-in2');
let inputIn3 = document.querySelector('.input-in3');
let inputIn4 = document.querySelector('.input-in4');
let inputIn5 = document.querySelector('.input-in5');
let div = document.querySelector('.out');
let button = document.querySelector('button');

button.onclick = function(){
   let a = inputIn1.value;
   let b = inputIn2.value;
   let c = inputIn3.value;
   let d = inputIn4.value;
   let e = inputIn5.value;
   div.innerHTML = "Добрый день" + " " + a + " " + b + " " + "вам:" + " " + c + " " + "лет" + " " + "ваш рост:" + " " + d + " " + "вы:" + " " + e;
};
