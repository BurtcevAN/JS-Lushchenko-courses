// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет - то выводить пустую строку.

let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

let out = document.querySelector(".out-9");
function f9() {
    let i9 = document.querySelector('.i-9').value;
    for (let key in a9) {
        if(i9 == a9[key]){
        out.innerHTML += key + ' ';
        }
        else{
        out.innerHTML += ' ';
        }
    }
}

document.querySelector('.b-9').onclick = f9;