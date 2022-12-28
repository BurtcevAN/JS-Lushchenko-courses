// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18
const out18 = document.querySelector('.out-18');
const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function f18() {
    let max18 = ar18[0];
    for(let i = 0; i < ar18.length; i++){
        if(ar18[i] > max18){
            max18 = ar18[i];
        }
        out18.innerHTML = max18;
    }
}
document.querySelector('.b-18').onclick = f18;