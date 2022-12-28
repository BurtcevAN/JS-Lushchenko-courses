// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19
const out19 = document.querySelector('.out-19');
let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {
    let min19 = ar19[0];
    for(let i = 0; i < ar19.length; i++){
        if(ar19[i] < min19){
            min19 = ar19[i];
        }
    out19.innerHTML = min19;
    }
}

document.querySelector('.b-19').onclick = f19;