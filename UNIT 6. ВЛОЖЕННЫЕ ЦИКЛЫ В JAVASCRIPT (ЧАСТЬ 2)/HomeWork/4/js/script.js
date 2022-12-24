//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
   let div = document.querySelector('.out');

   for(let i = 1; i < 4; i++){
      div.innerHTML += i + "_";
         for(let k = 1; k < 6; k++){
            div.innerHTML +=  k + " ";
         }
   }
}
document.querySelector('.b-4').onclick = t4;