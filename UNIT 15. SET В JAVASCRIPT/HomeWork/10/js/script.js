// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

const f10 = (out_set, elem) => { 
  let out = Array.from(out_set).join(' ');
  document.querySelector(elem).innerHTML = out;
  console.log(out);
};

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};