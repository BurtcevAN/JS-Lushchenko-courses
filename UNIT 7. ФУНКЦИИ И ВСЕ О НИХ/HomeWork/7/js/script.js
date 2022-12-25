// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t6() {
    return Math.ceil(Math.random() * 255);
}

function t7() {
    return `rgb(${t6()}, ${t6()}, ${t6()})`;
}
    document.querySelector('.button').onclick = function () {
    document.querySelector('.out').style.background = t7();
};