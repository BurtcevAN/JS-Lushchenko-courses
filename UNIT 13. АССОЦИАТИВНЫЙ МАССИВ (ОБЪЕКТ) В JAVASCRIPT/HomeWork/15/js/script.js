// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.

// т.е ожидаем 1 2 23 3 5 6 7 8 9 10

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};
out = document.querySelector('.out-15');
function f15() {
    for (let key in a15) {
        for (i = 0; i < a15[key].length; i++) {
            let a = 0;
            a += a15[key][i];
            out.innerHTML += a + ' ';
        }
    }
}

document.querySelector('.b-15').onclick = f15;