// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.

function t11() {
   let div = document.querySelector('.out');
   for (let i = 1; i < 10; i++){
      for(let k = 1; k < 10; k++){
         div.innerHTML += `${i}*${k}= ${k*i}<br>`;
      }
   div.innerHTML += '<hr>';
   }
}
document.querySelector('.b-11').onclick = t11;