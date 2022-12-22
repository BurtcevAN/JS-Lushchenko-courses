// 4) Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4 () {
    let div4 = document.querySelector('.out4');
    let i4 = +document.querySelector('.input6').value;
 
    if (i4 >= 2004){
        div4.innerHTML = 1;
        }
    else{
        div4.innerHTML = 0;
    }
 }
 
 document.querySelector('.b4').onclick = f4;


