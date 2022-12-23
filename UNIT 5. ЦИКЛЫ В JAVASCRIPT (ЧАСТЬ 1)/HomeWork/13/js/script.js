//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
// получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let elem = document.querySelectorAll('.i-13');
    console.log(elem);
        for (let i = 0; i < elem.length; i = i + 1){
        elem[i].value = i + 1;
        }
}
document.querySelector('.b-13').onclick = t13;