//  Task 14
// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.

let div14 = document.querySelector(".out-14");

function f14() {
    const a = document.createElement('div');
    a.innerText = "14";
    a.classList.add('bg-14');
    div14.prepend(a);
}

document.querySelector('.b-14').onclick = f14;