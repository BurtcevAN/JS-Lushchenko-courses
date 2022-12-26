//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15() {
       let out = document.querySelector('.out-15');
       let i = 0;
       while (i <= 10){
        out.innerHTML += (10-i) + " " + i + " ";
        i++;
        }
}

document.querySelector('.b-15').onclick = t15;