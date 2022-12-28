// Task 12
// Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let d12 = [6, 62, 60, 70, 1, 5];
let div = document.querySelector('.out-12');

function f12() {
    let num = +document.querySelector('.i-12').value;
    for(i = 0; i < d12.length; i++){
        if(num == d12[i]){
            div.innerHTML = i;
        }
        else{
            div.innerHTML = -1;
        }
    }
}

document.querySelector('.b-12').onclick = f12;