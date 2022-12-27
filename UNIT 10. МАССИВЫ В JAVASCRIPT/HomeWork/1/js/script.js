// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let ar1 = [1, "строка", true];
let a = document.querySelector('.out-1');

function f1() {
    a.innerHTML = ar1;
}

document.querySelector('.b-1').onclick = f1;