//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
   let div = document.querySelector('.out');
   for(let i = 0; i < 4; i++){
      for( let k = 0; k < 6; k++){
         if(k == 2 || k == 5){
         div.innerHTML += "x";
         }
         else if ( k % 2 == 0 ){
         div.innerHTML += 1;
         }
         else{
         div.innerHTML += 0;
         }
      }
   div.innerHTML += '<br>';
   }
}

document.querySelector('.b-6').onclick = t6;