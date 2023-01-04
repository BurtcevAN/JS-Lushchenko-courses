// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.

let s2 = new Set();

const f2 = () => {
   let i2 = document.querySelector('.i-2').value;
   s2.add(i2);
   console.log(s2);
 };

document.querySelector('.b-2').onclick = f2;