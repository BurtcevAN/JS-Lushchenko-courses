// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3

let out13 = document.querySelector('.out-13');
let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
        for(i = 0; i < ar13.length; i++){
                out13.innerHTML += i + " " + ar13[i];
        }
}

document.querySelector('.b-13').onclick = f13;