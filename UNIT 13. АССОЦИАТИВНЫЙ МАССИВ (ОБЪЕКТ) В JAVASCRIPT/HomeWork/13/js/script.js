// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

let out = document.querySelector(".out-13");
function f13() {
    let sum = 0;
    for(let key in a13){
        if(typeof a13[key] == 'number'){
            sum += a13[key];
        }
    }
    out.innerHTML = sum;
}

document.querySelector('.b-13').onclick = f13;
