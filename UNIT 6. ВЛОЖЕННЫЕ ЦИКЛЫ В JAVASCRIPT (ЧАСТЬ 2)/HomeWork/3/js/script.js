//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
let div = document.querySelector('.out');
function t3() {
   for( i = 0; i < 3; i ++){
      for( k = 0; k < 3; k++){
         div.innerHTML += "*_";
      }
      div.innerHTML += "<br>";
   }
}
document.querySelector('.b-3').onclick = t3;
