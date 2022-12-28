// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20
const out20 = document.querySelector('.out-20');
let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    let sum = 0;
    for (i = 0; i < ar20.length; i++){
        sum = sum + ar20[i];
    }
    out20.innerHTML = sum;
}

document.querySelector('.b-20').onclick = f20;
