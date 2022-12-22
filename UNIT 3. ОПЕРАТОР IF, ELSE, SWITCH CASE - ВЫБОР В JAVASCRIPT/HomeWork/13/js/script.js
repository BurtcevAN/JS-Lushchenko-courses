// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?


function f13 () {
    const div = document.querySelector('.out-13');
    const i = document.querySelector('.i-130').value;

    div.innerHTML = typeof(i);
}

document.querySelector(".b-13").onclick = f13;
