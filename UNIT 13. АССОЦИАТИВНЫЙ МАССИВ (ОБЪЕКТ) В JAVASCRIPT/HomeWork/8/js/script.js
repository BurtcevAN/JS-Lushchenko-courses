// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

let a8 = {
    "b": 17,
    "e": 22
};
let out = document.querySelector(".out-8");
function f8() {
    let i8 = document.querySelector('.i-8').value;
    let a = i8 in a8;
    if(a == true){
        out.innerHTML = i8;
    }
    else{
        out.innerHTML = 0;
    }
}

document.querySelector('.b-8').onclick = f8;