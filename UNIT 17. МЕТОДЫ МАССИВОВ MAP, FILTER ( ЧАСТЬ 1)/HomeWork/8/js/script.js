// Task 8 ============================================
/* Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. С помощью filter, переберите массив b8 и создайте массив b8_res, который содержит индексы четных элементов. Возвратите b8_res. Действия должны запускаться при вызове функции t8 */

let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];
let b8_res = [];
function t8() {
    b8.filter(function(elem, index) {
        if(elem % 2 == 0){
        b8_res.push(index);
        }
    });
    return b8_res;

}

document.querySelector('.b-8').onclick = () => {
console.log(t8());
};