// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14
let out14 = document.querySelector('.out-14');
let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
        for(i = ar14.length-1; i >= 0; i--){
                out14.innerHTML += ar14[i] + " ";
        }
}

document.querySelector('.b-14').onclick = f14;