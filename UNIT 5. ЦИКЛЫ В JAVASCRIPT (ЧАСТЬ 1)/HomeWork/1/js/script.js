//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1 () {
    for (let i = 0; i <= 50; i++){
         document.querySelector('.out-1').innerHTML += i + " ";
    }
}

document.querySelector('.b-1').onclick = t1;


