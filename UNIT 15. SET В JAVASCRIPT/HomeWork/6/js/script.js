// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];
let out = document.querySelector('.out-6');

const f6 = () => {
  let a = new Set(a6);
  out.innerHTML = a.size;
 };

document.querySelector('.b-6').onclick = f6;