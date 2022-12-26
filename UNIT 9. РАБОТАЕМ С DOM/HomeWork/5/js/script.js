//  Task 5
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.

function f5() {
    let a = document.querySelector('.out-4').classList.contains('bg-4');
    document.querySelector('.out-5').innerHTML = a;
}

document.querySelector('.b-5').onclick = f5;