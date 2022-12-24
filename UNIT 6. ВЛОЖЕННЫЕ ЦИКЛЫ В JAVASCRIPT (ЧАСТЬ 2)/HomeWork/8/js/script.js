//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
   let div = document.querySelector('.out');
      for (let i = 6; i > 0; i--){
         for (let k = 0; k < i; k++){
         div.innerHTML += "*";
         }
      div.innerHTML += "<br>"; 
      }
}

document.querySelector('.b-8').onclick = t8;