//  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.

let div11 = document.querySelector('.out-11');
function f11() {
    const a = document.createElement("div");
    a.innerText = "25";
    div11.appendChild(a);
}

document.querySelector('.b-11').onclick = f11;
