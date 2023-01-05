// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1,2], [3,4], [5,6]];
out = document.querySelector('.out-6');

function f6() {
   let arr = [];
   for(let i of a6){
      for(let k of i){
      arr.push(k);
      out.innerHTML += k + " ";
      }
   }
   console.log(arr);
}

document.querySelector('.b-6').addEventListener('click', f6);