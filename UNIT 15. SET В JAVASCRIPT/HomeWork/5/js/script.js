// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);
let out = document.querySelector('.out-5');

    const f5 = () => { 
      out.innerHTML = s5.size;
    };

document.querySelector('.b-5').onclick = f5;