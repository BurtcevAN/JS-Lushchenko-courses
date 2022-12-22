
// 2) Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

function f2()  {
    let a21 = +document.querySelector('.input2').value;
    let a22 = +document.querySelector('.input3').value;
    let div2 = document.querySelector('.out2');

    if (a21 > a22){
        div2.innerHTML = a21;
    }
    else{
        div2.innerHTML = a22;
    }
}

document.querySelector('.b2').onclick = f2;