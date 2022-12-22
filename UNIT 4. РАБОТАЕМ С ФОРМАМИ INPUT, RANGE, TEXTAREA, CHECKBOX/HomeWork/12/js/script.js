// Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.

document.querySelector('.b-12').onclick = () => {
      const i12 = document.querySelector(".i-12").value;
      document.querySelector('.out-12').innerHTML = i12;
};