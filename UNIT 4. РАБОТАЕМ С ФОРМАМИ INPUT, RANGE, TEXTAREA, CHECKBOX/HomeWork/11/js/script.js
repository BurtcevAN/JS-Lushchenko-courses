// Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

document.querySelector('.b-11').onclick = () => {
      const i111 = document.querySelector('.i-111');
      const i112 = document.querySelector('.i-112');
   
      i112.style.backgroundColor = i111.value;
      i111.style.backgroundColor = i112.value;
};
