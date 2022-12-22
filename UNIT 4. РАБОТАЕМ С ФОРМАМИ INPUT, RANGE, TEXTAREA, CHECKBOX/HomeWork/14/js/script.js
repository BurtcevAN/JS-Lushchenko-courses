// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

document.querySelector(".b-14").onclick = () => {
const t14 = document.querySelector('.t-14').value;

document.querySelector('.out-14').innerHTML = t14;
};
