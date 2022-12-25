//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.
let out = document.querySelector('.out-2');
function t2() {
    let p = 0;
    while (p < 122){
        p = p + 2;
        out.innerHTML += p + " ";
    }
}

document.querySelector('.b-2').onclick = t2;