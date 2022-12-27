// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3
let out = document.querySelector('.out-3');
let ar3 = [1, 2, 3, 4];

function f3() {
    let a = ar3.length;
    out.innerHTML = a;
}

document.querySelector('.b-3').onclick = f3;
