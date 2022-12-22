// Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

function f12 () {
    const div = document.querySelector('.out-12');
    const i = document.querySelector('.i-120').value;

    div.innerHTML = typeof(i);
}

document.querySelector(".b-12").onclick = f12;