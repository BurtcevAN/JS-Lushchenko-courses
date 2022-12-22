// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

document.querySelector('.b-7').onclick = () => {
   const i7 = document.querySelector('.i-7').value;
   const div71 = document.querySelector('.out-71');
   const div72 = document.querySelector('.out-72');
   div71.innerHTML = i7;
   if (i7.length >= 6){
      div72.innerHTML = 1;
   }
   else{
      div72.innerHTML = 0;
   }
};



