// Task 15
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15  (переводим в число), а потом - если нет - добавляет его в массив.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

function showArr (domElem, arr){
        let out = " ";
         for(i = 0; i < arr.length; i++){
            out += arr[i] + ' ';
         }
         document.querySelector(domElem).innerHTML = out;
    }

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let i15 = +document.querySelector(".i-15").value;
    let a = d15.indexOf(i15);
    if(a == -1){
        d15.push(i15);
    }
       showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;