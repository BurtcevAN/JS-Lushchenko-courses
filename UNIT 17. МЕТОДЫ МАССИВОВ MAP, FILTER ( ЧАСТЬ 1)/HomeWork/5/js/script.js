// Task 5 ============================================
/*  Дан массив b1 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте b1_res, который содержит только четные числа из b1. Возвратите b1_res. Действия должны запускаться при вызове функции t5. */

let b1 = [3, 14, 15, 92];
let b1_res = [];

function t5() {
    b1_res = b1.filter(elem => {
        return elem % 2 == 0;
    });
return b1_res;
}

document.querySelector('.b-5').onclick = () => {
    console.log(t5());
};