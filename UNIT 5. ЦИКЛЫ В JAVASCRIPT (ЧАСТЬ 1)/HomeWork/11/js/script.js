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