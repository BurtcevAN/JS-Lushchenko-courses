// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let a7 = {
    "b": 17,
    "e": 22
};

let out = document.querySelector(".out-7");

function f7() {
    let i7 = document.querySelector(".i-7").value;
    let a = i7 in a7;
    if (a == true){
    out.innerHTML = 1;
    }
    else{
    out.innerHTML = 0;
    }
}

document.querySelector('.b-7').onclick = f7;