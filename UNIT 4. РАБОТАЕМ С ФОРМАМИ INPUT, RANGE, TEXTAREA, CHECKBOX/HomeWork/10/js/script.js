// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

document.querySelector('.b-10').onclick = () => {
      const i10 = document.querySelector('.i-10');
      const div = document.querySelector('.out-10');

      div.style.backgroundColor = i10.value;
};