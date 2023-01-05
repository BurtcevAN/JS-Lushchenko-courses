// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';
out = document.querySelector('.out-13');
function f13() {
    let a = '';
    for(let item of a13){
        a += item + " ";
    }
out.innerHTML = a; 
}

document.querySelector('.b-13').addEventListener('click', f13);