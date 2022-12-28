// Task 4
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
// функция выполняется при нажатии кнопки b-4
function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f4() {
    let i = document.querySelector('.i-4').value;
    d1.push(i);
    showArr('.out-4', d1);
}
document.querySelector('.b-4').onclick = f4;