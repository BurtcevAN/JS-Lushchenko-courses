// Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.

document.querySelector('.b-6').onclick = () => {
const div = document.querySelector('.out-6');
 div.innerHTML = (document.querySelector('.i-6').value);
};



