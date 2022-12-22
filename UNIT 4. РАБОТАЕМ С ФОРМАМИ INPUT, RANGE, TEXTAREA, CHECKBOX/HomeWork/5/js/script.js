// Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.

document.querySelector('.b-5').onclick = () => {
   let div = document.querySelector('.out-5');
   let c = document.querySelector('.i-5');
   console.log(c.checked);
   if (c.checked) {
      div.innerHTML = c.value;
   }
   else {
      div.innerHTML = false;
   }
};
