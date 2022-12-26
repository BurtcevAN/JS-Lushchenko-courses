//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.


function f1() {
    let one = document.querySelector('.out-1');
    one.style.width = '200px';
    one.style.height = '40px';
    one.style.border = '2px solid red';
}

document.querySelector('.b-1').onclick = f1;