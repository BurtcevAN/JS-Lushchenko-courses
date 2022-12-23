//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

function t11() {
 let elem = document.querySelectorAll('.div-11');
       console.log(elem);
for (let i = 0; i < elem.length; i++){
   console.log(elem[i].textContent);
    document.querySelector(".out-11").innerHTML += elem[i].textContent + " ";
}
}

document.querySelector('.b-11').onclick = t11;














//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

// function t10() {
//    for (let i = 1950; i <= 2000; i = i+2)
//    document.querySelector(".out-10").innerHTML += i + " ";
// }

// document.querySelector('.b-10').onclick = t10;
