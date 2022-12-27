// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

let arr2 = [1, "строка", true];

function f2() {
    let out = '';
    for (let i = 0; i < arr2.length; i++) {
        out +=arr2[i]+' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;