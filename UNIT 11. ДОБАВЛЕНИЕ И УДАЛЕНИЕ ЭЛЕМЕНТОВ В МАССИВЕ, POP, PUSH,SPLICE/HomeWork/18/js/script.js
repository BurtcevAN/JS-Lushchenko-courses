// Task 18
// Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода include. Результат применения метода - выводится в .out-18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];
let out = document.querySelector('.out-18');

function f18() {
    let i18 = document.querySelector('.i-18').value;
    let a = d18.includes(i18);
    out.innerHTML = a;
}

document.querySelector('.b-18').onclick = f18;