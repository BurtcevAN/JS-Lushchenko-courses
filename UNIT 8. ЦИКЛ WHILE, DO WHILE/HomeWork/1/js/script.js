//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let out = document.querySelector('.out-1');
function t1() {
    let p = 0;
    while ( p < 50){
        p++;
        out.innerHTML += p + " ";
    }
}
document.querySelector('.b-1').onclick = t1;