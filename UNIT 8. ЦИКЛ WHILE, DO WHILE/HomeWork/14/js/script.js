//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

function t14() {
let elem = document.querySelectorAll('.i-14');
let out = document.querySelector('.out-14');
        i = 0;
        while(i < elem.length){
                if(elem[i].checked){
                out.innerHTML += elem[i].value;
                } 
                i++;    
        }
}

document.querySelector('.b-14').onclick = t14;