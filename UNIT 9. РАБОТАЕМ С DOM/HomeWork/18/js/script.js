//  Task 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

const div18 = document.querySelector(".out-18");
const p = document.querySelector(".p-18");
function f18() {
    const a = p.getAttribute('data');
    div18.innerHTML = a;
}

document.querySelector('.b-18').onclick = f18;