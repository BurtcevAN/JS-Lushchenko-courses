// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте массив b6_res, который содержит только числа из b6. Возвратите b6_res. Действия должны запускаться при вызове функции t6. */

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];
let b6_res = [];

function t6() {
    b6_res = b6.filter(elem => {
    return typeof (elem) == "number";
    });
return b6_res;
}

document.querySelector('.b-6').onclick = () => {
    console.log(t6());
};