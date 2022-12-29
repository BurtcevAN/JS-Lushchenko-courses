// Task 16
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

function showArr (domElem, arr){
        let out = " ";
         for(i = 0; i < arr.length; i++){
            out += arr[i] + ' ';
         }
         document.querySelector(domElem).innerHTML = out;
    }

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
    d16 =  d161.concat(d162);

    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;