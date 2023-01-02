// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};
out = document.querySelector('.out-14');

function f14() {
    for (let key in a14){
    out.innerHTML += a14[key][0] + " ";
    }
}

document.querySelector('.b-14').onclick = f14;