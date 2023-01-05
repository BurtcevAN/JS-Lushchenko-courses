// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4,5,6]);
out = document.querySelector('.out-14');
function f14() {
    let a = '';
        for(let item of a14){
            a += item + " ";
        }
    out.innerHTML = a; 
}

document.querySelector('.b-14').addEventListener('click', f14);