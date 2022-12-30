// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

function f5(arr, block) {

    let out = " ";
    for(let key in arr){  
    out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML =  out;
}

let a6 = {
    "b": 17,
    "e": 22
};

function f6() {
    i61 = document.querySelector('.i-61').value;
    i62 = document.querySelector('.i-62').value;
    a6[i61] = i62;
    f5(a6, ".out-6");
}

document.querySelector('.b-6').onclick = f6;