//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.

function t8() {
   let a = document.querySelector(".i-81").value;
   let b = document.querySelector(".i-82").value;
   for (let i = a; i <= b; i++){
   document.querySelector(".out-8").innerHTML += i + " ";
   }
}
document.querySelector('.b-8').onclick = t8;

