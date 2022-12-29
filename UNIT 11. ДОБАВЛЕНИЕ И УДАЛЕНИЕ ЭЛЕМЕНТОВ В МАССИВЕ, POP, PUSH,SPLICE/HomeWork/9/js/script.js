// Task 9
// Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

function showArr (domElem, arr){
    let out = " ";
     for(i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
     }
     document.querySelector(domElem).innerHTML = out;
}

let d9 = [100, 200, 300, 400, 700, 121];
console.log(d9.length);


function f9() {
    let newArr=[];
    let b = d9[0];
        for (i = 1; i < d9.length; i++) {
        newArr[i-1] = d9[i];
        }
    d9 = newArr;

   console.log(b);  
   
    showArr('.out-9', d9);
}

document.querySelector('.b-9').onclick = f9;