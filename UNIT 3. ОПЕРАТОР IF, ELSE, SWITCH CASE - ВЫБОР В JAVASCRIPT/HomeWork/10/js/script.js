// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

function f10 () {
    const a = document.querySelector('.s-100').value;
    const div = document.querySelector('.out-10');

    div.innerHTML = a;
}
 document.querySelector('.b-10').onclick = f10;