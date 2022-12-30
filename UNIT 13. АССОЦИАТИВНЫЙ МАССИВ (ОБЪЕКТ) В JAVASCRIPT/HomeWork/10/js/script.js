// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr, val) {
    for (let key in arr) {
        if(val == arr[key]){
            return true;
        }
        else{
            return false;
        }
    }
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    };
    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};