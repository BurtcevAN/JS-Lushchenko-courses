
// 6) Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.


function f6 () {
    const i6 = +document.querySelector('.input').value;
    const div = document.querySelector('.out6');
    
    if (i6 % 2 == 0){
        div.innerHTML = 'even';
    }
    else{
        div.innerHTML = 'odd';
    }
    }
    document.querySelector('.b6').onclick = f6;