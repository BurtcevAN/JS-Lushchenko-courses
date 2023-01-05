// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5,7,9, 11, 13, 15];
out = document.querySelector('.out-1');

function f1() {
   for (let i = 0; i < a1.length; i++){
      out.innerHTML += a1[i] + " ";
   }
}

document.querySelector('.b-1').addEventListener('click', f1);