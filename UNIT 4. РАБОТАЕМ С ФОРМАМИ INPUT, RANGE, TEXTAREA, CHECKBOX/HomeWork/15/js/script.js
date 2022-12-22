// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

document.querySelector(".b-15").onclick = () => {
   const i15 = document.querySelector('.i-15').value;
   
   document.querySelector('.out-15').innerHTML = i15;
   document.querySelector('.t-15').innerHTML = i15;
};