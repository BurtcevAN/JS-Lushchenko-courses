// Task 2
//Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2
// функция выполняется при нажатии кнопки b-2

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f2() {
    d1.pop();
    showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;