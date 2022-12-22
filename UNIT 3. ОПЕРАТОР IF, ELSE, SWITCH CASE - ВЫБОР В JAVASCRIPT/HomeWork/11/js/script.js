// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.


function f11 () {
    const a = document.querySelector('.s-110').value;
    const div = document.querySelector('.out-11');

    div.innerHTML = a;
}
 const b = document.querySelector('.s-110').onchange = f11;