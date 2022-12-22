// 3) Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.

// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.


function f3() {
    const i31 = +document.querySelector('.input4').value;
    const i32 = +document.querySelector('.input5').value;
    const div3 = document.querySelector('.out3');

if (i31 > i32){
    div3.innerHTML = i31;
}
else {
    div3.innerHTML = i32;
}
}

document.querySelector('.b3').onclick = f3;