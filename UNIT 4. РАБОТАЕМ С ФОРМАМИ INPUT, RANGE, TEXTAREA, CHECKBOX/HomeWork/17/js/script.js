// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

function f17 () {
let s17 = document.querySelector('.s-17').value;
document.querySelector('.out-17').innerHTML = s17;
}

document.querySelector('.s-17').onchange = f17;

