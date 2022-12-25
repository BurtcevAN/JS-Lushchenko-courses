// Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.
let out = document.querySelector('.out-3');
function t3() {
    let p = 25;
    while(p >= 7){
        out.textContent += p + " ";
        p--;
    }
}

document.querySelector('.b-3').onclick = t3;