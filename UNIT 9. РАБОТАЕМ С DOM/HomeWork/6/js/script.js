//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.

function f6() {
    let a = document.querySelectorAll('.p-6');
    document.querySelector('.out-6').innerHTML = a.length;
}

document.querySelector('.b-6').onclick = f6;