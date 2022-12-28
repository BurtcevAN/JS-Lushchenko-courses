// Task 3
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
// функция выполняется при нажатии кнопки b-3

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f3() {
    d1.shift();
    showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;