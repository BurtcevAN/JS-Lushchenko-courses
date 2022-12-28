// Task 13
// Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13

function showArr (domElem, arr){
    let out = " ";
     for(i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
     }
     document.querySelector(domElem).innerHTML = out;
}

let d13 = [6, 0, 22, 1, 4, 76];
let d14 = [];


function f13() {
    let j = d13.length-1;
    let d14 = [];
    for (let i = 0; i < d13.length; i++){
        d14[i] = d13[j];
        j--;
       
    }
    showArr('.out-13', d14);
}

document.querySelector('.b-13').onclick = f13;