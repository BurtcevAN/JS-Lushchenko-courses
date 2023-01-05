// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
};

out = document.querySelector('.out-11');
function f11() {
    for(let key in a11){
        if(a11[key] > 5){
            out.innerHTML += a11[key] + " ";
        }
    }
}

document.querySelector('.b-11').addEventListener('click', f11);