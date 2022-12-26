//  Task 15
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.

div15 = document.querySelector(".out-15");
function f15() {
    const a = document.createElement('div');
    a.innerText = "15";
    a.classList.add('bg-15');
    div15.before(a);
}

document.querySelector('.b-15').onclick = f15;