// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let out12 = document.querySelector('.out-12');
let ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {
        let a = ar12[0];
        ar12[0] = ar12[ar12.length-1];
        ar12[ar12.length-1] = a;

        for(i = 0; i < ar12.length; i++){
                out12.innerHTML += ar12[i] + " ";
        }
}

document.querySelector('.b-12').onclick = f12;