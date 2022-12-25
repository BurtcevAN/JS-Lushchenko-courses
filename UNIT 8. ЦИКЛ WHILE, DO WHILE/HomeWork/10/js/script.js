//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
   let out = document.querySelector('.out-10');
   p = 1950;
    while (p <= 2000){
    out.innerHTML += p + " ";
    p = p + 2;
    }
}

document.querySelector('.b-10').onclick = t10;