// Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.

// если от 1 до 32 - то вывести цифру 1
// если от 33 до 43 - то вывести 2
// если от 44 до 64 - то 3.
// В противном случае, вывести 0.



function f9 () {
    let a = +document.querySelector('.i-9').value;
    let div = document.querySelector('.out-9');
if (a >= 1 && a <= 32) {
    div.innerHTML = 1; 
}
else if (a >= 33 && a <= 43){
    div.innerHTML = 2;
}
else if (a >= 44 && a <= 64){
    div.innerHTML = 3;
}
else {
    div.innerHTML = 0;
}
}
 document.querySelector('.b-9').onclick = f9;
