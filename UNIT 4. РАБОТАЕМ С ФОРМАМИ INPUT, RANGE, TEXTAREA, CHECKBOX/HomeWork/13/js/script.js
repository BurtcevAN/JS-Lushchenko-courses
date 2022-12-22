// Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

document.querySelector(".i-13").oninput = () => {
      const i13 = document.querySelector(".i-13").value;
      document.querySelector(".out-13").innerHTML = i13;
};
