// Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4


document.querySelector('.b-4').onclick = () => {
   let div = document.querySelector('.out-4');
   let c = document.querySelector('.i-4');
   console.log(c.checked);
   if (c.checked) {
      div.innerHTML = true;
   }
   else {
      div.innerHTML = false;
   }
};



