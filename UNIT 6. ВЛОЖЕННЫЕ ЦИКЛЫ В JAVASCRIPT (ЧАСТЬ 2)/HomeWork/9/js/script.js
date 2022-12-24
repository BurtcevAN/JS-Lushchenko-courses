//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
   let div = document.querySelector('.out');
   for(i = 1; i < 6; i++){
      for( k = 1; k < i + 1; k++){
         div.innerHTML += k + " ";
      }
   div.innerHTML += "<br>";
   }
}
document.querySelector('.b-9').onclick = t9;
