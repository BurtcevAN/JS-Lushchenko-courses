//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
 let elem = document.querySelectorAll('.div-12');
        i = 0;
        while (i < elem.length) {
                elem[i].style.background = 'orange';
                i++;
        }
}

document.querySelector('.b-12').onclick = t12;