// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

const div8 = document.querySelector('.out-8');

document.querySelector('.b-8').onclick = () => {
      div8.innerHTML = '<input type="text" class="i-81"></input> <button class="b-81">OK2</button> <div class="out-81"></div>';

      const div81 = document.querySelector('.out-81');
      const i81 = document.querySelector('.i-81');

document.querySelector('.b-81').onclick = function f81 () {
   div81.innerHTML = i81.value;
};
};



