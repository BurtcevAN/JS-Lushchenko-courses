
//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
   let div = document.querySelector('.out');
   for(i = 1; i < 5; i++){
      for( k = 0; k < i; k++){
         div.innerHTML += "*";
      }
   div.innerHTML += "<br>";
   }
}
document.querySelector('.b-7').onclick = t7;