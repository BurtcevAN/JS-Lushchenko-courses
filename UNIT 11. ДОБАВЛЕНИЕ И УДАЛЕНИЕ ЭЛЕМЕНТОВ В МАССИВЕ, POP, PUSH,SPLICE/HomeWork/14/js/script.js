// Task 14
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

function showArr (domElem, arr){
    let out = " ";
     for(i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
     }
     document.querySelector(domElem).innerHTML = out;
}

function f14() {
    let d14 = [];
    let i14 = +document.querySelector('.i-14').value;
    for(i = 0; i < i14; i++){
        d14[i] = 1;
    }
    showArr('.out-14', d14);
}

document.querySelector('.b-14').onclick = f14;