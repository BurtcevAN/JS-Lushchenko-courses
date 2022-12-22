// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

function f18() {
   const s18 = document.querySelector('.s-18').value;
   document.querySelector('.i-18').value = s18;
}

document.querySelector('.s-18').onchange = f18;