// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8
let out8 = document.querySelector('.out-8');
let out81 = document.querySelector('.out-8-1');
let ar8 = [];

function f8() {
        ar8[3] = 3.14;
        ar8[4] = 17;
        ar8[6] = 5;
        for(i = 0; i < ar8.length; i++){
        out8.innerHTML += ar8[i] +'-';
        }
        out81.innerHTML = ar8.length;     
}
document.querySelector('.b-8').onclick = f8;