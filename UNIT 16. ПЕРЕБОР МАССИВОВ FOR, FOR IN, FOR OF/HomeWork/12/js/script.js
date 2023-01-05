// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];
out = document.querySelector('.out-12');
function f12() {
    for(let item of a12){
        out.innerHTML += item + " ";
    }
}

document.querySelector('.b-12').addEventListener('click', f12);