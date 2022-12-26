//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.

let div12 = document.querySelector(".out-12");
function f12() {
    const a = document.createElement('div');
    a.innerText = "12";
    a.classList.add('bg-12');
    div12.appendChild(a);
}

document.querySelector('.b-12').onclick = f12;