//  Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3.

function f3() {
    document.querySelector('.out-3').classList.remove('bg-3');
}

document.querySelector('.b-3').onclick = f3;