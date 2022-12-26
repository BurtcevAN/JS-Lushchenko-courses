//  Task 10
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.

let div10 = document.querySelectorAll('.out-10');

function f10() {
    this.classList.toggle("bg-10");
}

for(i = 0; i < div10.length; i++ ){
    div10[i].onclick = f10;
}