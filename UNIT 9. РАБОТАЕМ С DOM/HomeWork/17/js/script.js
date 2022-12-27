//  Task 17
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет  out-17 с помощью replaceWith.

const div17 = document.querySelector('.out-17');
function f17() {
    const a = document.createElement('div');
    a.innerText = '17';
    a.classList.add('bg-17');
    div17.replaceWith(a);

}

document.querySelector('.b-17').onclick = f17;