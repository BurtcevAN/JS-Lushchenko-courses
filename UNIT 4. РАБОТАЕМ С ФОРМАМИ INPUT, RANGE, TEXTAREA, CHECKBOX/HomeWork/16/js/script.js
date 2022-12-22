// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.
    // для получения выбранного option просто получите select в переменную и select.value;

document.querySelector('.b-16').onclick = () =>{
const s16 = document.querySelector('.s-16').value;

document.querySelector('.out-16').innerHTML = s16;
};
