// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

let out = document.querySelector('.out-4');
let ar4 =  [1,2,3,4,5,6,7,8,9,10];

function f4() {
    out.innerHTML = ar4[0] + " " + ar4[3] + " " + ar4[8];
}

document.querySelector('.b-4').onclick = f4;