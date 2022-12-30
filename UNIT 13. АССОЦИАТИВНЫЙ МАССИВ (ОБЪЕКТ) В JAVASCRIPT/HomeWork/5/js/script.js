// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).

function f5(arr, block) {

    let out = " ";
    for(let key in arr){  
    out+= `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML =  out;
}

// давайте протестируем f5

document.querySelector('.b-5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
};