// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

let a2 = [5,7,9, 11, 13, 15];
out = document.querySelector('.out-2');

function f2() {
   for(i = 0; i < a2.length; i++){
      out.innerHTML += i + " " + a2[i] + " ";
   }

}

document.querySelector('.b-2').addEventListener('click', f2);