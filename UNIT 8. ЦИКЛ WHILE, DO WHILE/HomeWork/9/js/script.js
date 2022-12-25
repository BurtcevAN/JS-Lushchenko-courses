//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

function f9() {
    let i91 = +document.querySelector(".i-91").value;
    let i92 = +document.querySelector(".i-92").value;
    let out = document.querySelector('.out-9');
    if (i91 < i92){
        while(i91 <= i92){
            out.innerHTML += i91 + " ";
            i91++;
        }
    }
    else {
        while(i92 <= i91){
            out.innerHTML += i92 + " ";
            i92++;
        }
    }
}

document.querySelector('.b-9').onclick = f9;