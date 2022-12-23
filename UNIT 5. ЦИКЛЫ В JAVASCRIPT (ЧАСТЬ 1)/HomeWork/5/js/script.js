//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

function t5() {
   for(i = 1; i <= 17; i++)
      if (i % 2 == 0){
         document.querySelector(".out-5").innerHTML += i + "_" + "**";
      }
      else
         document.querySelector(".out-5").innerHTML += i + "_" + "*";
}

document.querySelector('.b-5').onclick = t5;