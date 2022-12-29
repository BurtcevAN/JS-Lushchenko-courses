// Task 19
// Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let out = document.querySelector('.out-19');
let maxString = d19[0];

function f19() {
    for(i = 0; i < d19.length; i++){
        if(d19[i].length > maxString.length){
            maxString = d19[i];
            out.innerHTML = maxString;
        }
    }
}

document.querySelector('.b-19').onclick = f19;
