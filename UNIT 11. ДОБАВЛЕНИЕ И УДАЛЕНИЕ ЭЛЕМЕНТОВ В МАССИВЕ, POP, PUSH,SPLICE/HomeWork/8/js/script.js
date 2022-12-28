// Task 8
// Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

function showArr (domElem, arr){
    let out = " ";
     for(i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
     }
     document.querySelector(domElem).innerHTML = out;
}

let d8 = [2, '4', 12, 67, 'hello'];
// console.log(d8.length);
function f8() {
    let val = document.querySelector('.i-8').value;
        for(let i = d8.length; i > 0; i--){
        d8[i] = d8[i-1];
        }
    d8[0] = val;
    // console.log(d8.length);
    showArr('.out-8', d8);
}

document.querySelector('.b-8').onclick = f8;