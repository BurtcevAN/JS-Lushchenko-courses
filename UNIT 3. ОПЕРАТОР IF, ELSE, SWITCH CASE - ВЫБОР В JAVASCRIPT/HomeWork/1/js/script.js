
// 1) При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

function f1() {
    const i1 = +document.querySelector('.input').value;
    const div1 = document.querySelector('.out1');

if(i1 == 4){
    div1.innerHTML = true;
}
else{
    div1.innerHTML = false;
}
}
document.querySelector('button').onclick = f1;
