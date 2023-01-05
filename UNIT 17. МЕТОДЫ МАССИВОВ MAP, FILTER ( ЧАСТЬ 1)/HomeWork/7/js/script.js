// Task 7 ============================================
/*  Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. C помощью filter переберите массив b7 и создайте  b7_res, который содержит только строки из b7, длина которых больше 3. Возвратите b7_res. Действия должны запускаться при вызове функции t7. */

let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];
let b7_res = [];

function t7() {
    b7_res = b7.filter(elem => {
    return typeof (elem) == "string" && elem.length > 3;
    });
return b7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
};