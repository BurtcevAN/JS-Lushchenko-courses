// 7) Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7() {
    let i71 = +document.querySelector('.i-71').value;
    let i72 = +document.querySelector('.i-72').value;
    let div = document.querySelector('.out-7');

    div.innerHTML = Math.pow(i71,i72);

}
document.querySelector('.b-7').onclick = f7;