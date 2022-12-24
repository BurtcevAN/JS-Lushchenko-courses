//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
   let div = document.querySelector('.out');
   for( let i = 0; i < 3; i++){
      div.innerHTML += '<br>';
      for (let k = 0; k < 6; k++){
         if(k % 2 ==0) {
            div.innerHTML += 1;
         }
         else{
            div.innerHTML += 0;
         }
      }
   }
}
document.querySelector('.b-5').onclick = t5;