// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 

function t6(a, b) {
    return Math.ceil(Math.random() * (a - b + 1)) + b;
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(100, 2);
};