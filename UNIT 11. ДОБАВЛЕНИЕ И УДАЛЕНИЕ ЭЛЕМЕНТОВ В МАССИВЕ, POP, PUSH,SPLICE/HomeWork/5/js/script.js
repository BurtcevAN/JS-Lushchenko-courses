// Task 5
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
// функция выполняется при нажатии кнопки b-5

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}
let d1 = [33, 'best', 66, 'best'];

function f5() {
    let i = document.querySelector('.i-5').value;
    d1.unshift(i);

    showArr('.out-5', d1);
}

document.querySelector('.b-5').onclick = f5;