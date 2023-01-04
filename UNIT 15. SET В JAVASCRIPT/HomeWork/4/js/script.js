// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let s4 = new Set(['a', 'b', 'c', 'z']);
let out = document.querySelector('.out-4');

const f4 = () => { 
  let i4 = document.querySelector('.i-4').value;
  if(s4.has(i4)){
    out.innerHTML = true;
  }
  else{
    out.innerHTML = false;
  }
};

document.querySelector('.b-4').onclick = f4;