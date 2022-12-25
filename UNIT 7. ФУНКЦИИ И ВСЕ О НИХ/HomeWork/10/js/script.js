// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - любое из чисел.

function t10(a, b) {
    return Math.max(a, b);
}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(24, 9);
};