// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!

let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
console.log(a4);
function f4() {
    let out = " ";
    for(let key in a4){
        out += key + " " + a4[key] +" <br>";
    }

    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
};