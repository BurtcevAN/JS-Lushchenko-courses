// Task 17
// Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

function showArr (domElem, arr){
        let out = " ";
         for(i = 0; i < arr.length; i++){
            out += arr[i] + ' ';
         }
         document.querySelector(domElem).innerHTML = out;
    }

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {

    for(i = 0; i < d172.length; i++){
    d171.push(d172[i]);
    }
d17 = d171;
showArr('.out-17', d17);
}

document.querySelector('.b-17').onclick = f17;