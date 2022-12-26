//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
let elem = document.querySelectorAll('.div-11');
let out = document.querySelector('.out-11');
        let i = 0;
        while(i < elem.length){
        out.innerHTML += elem[i].textContent + " ";
        i++;
        }
}
document.querySelector('.b-11').onclick = t11;