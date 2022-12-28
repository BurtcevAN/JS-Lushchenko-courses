// Task 7
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7
function showArr (domElem, arr){
    let out = " ";
     for(i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
     }
     document.querySelector(domElem).innerHTML = out;
}

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    for(let i = 0; i < d7.length; i++){
        let f = d7[d7.length-1];
        d7[d7.length-1] = '';
        console.log(f);
    }

    showArr('.out-7', d7);
}

document.querySelector('.b-7').onclick = f7;