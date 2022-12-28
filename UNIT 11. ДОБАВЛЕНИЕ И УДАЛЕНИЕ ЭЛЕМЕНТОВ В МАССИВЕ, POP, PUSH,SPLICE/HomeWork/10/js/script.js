// Task 10
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

function showArr (domElem, arr){
    let out = " ";
     for(i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
     }
     document.querySelector(domElem).innerHTML = out;
}

let d10 = [3, 14, 15, 92, 6];

function f10() {
    document.querySelector('.out-10').innerHTML = d10.reverse();
    showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;
