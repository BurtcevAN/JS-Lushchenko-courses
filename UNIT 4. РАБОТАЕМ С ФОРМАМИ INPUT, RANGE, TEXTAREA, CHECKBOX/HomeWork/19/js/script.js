// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

document.querySelector('.b-19').onclick = () => {
let i191 = document.querySelector('.i-191').value;
let i192 = document.querySelector('.i-192').value;

document.querySelector('.out-19').innerHTML = i191 + " " + i192;
};
