// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1.two;
}

document.querySelector('.b-1').onclick = f1;