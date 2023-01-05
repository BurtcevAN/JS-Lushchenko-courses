// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];

function f5() {
   let arr = [];
   for( let item of a5){
      if(item > 7){
         arr.push(item);
      }
   }
   return arr;
}

document.querySelector('.b-5').addEventListener('click', ()=> {
    document.querySelector('.out-5').innerHTML = f5();
});