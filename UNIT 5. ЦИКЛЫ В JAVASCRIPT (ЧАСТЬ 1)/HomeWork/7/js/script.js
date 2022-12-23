//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.

function t7() {
   let a = document.querySelector(".i-7").value;
   for (let i = a; i >= 0; i--) {
      document.querySelector(".out-7").innerHTML += i + " ";
   }
}

document.querySelector(".b-7").onclick = t7;
