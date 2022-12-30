// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };

    return a2.five;
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
};