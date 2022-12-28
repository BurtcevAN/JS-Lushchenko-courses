// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let even = document.querySelector('.out-16-even');
let odd = document.querySelector('.out-16-odd');
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    for(let i = 0; i< ar16.length; i++){
        if(ar16[i] % 2 == 0){
            ar16_even.push(ar16[i]);
            even.innerHTML = ar16_even;
        }
        else{
            ar16_odd.push(ar16[i]);
            odd.innerHTML = ar16_odd;
        }
    }
}

document.querySelector('.b-16').onclick = f16;