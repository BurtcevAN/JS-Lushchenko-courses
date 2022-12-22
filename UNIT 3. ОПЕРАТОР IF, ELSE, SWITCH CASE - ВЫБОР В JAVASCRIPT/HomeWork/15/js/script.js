// Дан select s-151 и s-152, каждый из которых содержит 1 и 0. Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.



function f15 () {
   const s151 = document.querySelector('.s-151').value;
   const s152 = document.querySelector('.s-152').value;
   const s153 = document.querySelector('.s-153').value;
   const div = document.querySelector('.out-15');

   div.innerHTML = eval(s151 + s153 + s152);

}

document.querySelector('.b-15').onclick = f15;