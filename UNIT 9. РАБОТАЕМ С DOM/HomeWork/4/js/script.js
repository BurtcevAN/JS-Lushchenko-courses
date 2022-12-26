//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.

function f4() {
    document.querySelector('.out-4').classList.toggle('bg-4');
}

document.querySelector('.b-4').onclick = f4;