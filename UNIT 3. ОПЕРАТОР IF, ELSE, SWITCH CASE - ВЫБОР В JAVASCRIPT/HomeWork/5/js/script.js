// 5) Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.


function f5 () {
    const i5 = +document.querySelector('.input7').value;
    const div5 = document.querySelector('.out5');
if(i5 < 0){
    div5.innerHTML = 'm';
    }
else if (i5 == 0){
    div5.innerHTML = 0;
    }
else{
    div5.innerHTML = 1;
}    
}

document.querySelector('.b5').onclick = f5;
