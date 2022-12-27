//  Task 16
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.
const div16 = document.querySelector(".out-16");
function f16() {
    const a = document.createElement('div');
    a.innerText = "16";
    a.classList.add('bg-16');
    div16.after(a);

}

document.querySelector('.b-16').onclick = f16;