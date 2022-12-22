// Дан input i-141 и input-142, type=number. Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14.

function f14 () {
    const div = document.querySelector('.out-14');
    const i141 = document.querySelector('.i-141').value;
    const i142 = document.querySelector('.i-142').value;
    const s143 = document.querySelector('.s-143').value;

    div.innerHTML = eval(i141 + s143 + i142); 
}

document.querySelector('.b-14').onclick = f14;



