// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let out17 = document.querySelector('.out-17');
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {
    let a = [];
    for(let i = 0; i < ar17.length; i++){
        if(ar17[i] > 3){
            a.push(ar17[i]);
        }
    out17.innerHTML = a.length;
    }
}

document.querySelector('.b-17').onclick = f17;