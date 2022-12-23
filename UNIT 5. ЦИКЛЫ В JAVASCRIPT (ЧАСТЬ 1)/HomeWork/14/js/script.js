//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let elem = document.querySelectorAll(".i-14");
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
    console.log(elem[i]);
        if (elem[i].checked){
        document.querySelector('.out-14').innerHTML = elem[i].value;
        }
    }
}

document.querySelector('.b-14').onclick = t14;