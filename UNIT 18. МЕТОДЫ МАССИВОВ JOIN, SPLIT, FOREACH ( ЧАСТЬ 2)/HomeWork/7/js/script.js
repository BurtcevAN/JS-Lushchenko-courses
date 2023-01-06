// Task 7 ============================================
/*  Дана строка str7='hello world hi mazai' - преобразуйте ее в массив и разбейте по словам. Причем слова не должны содержать пробелов и присвойте a6_res. выведите на страницу.  Запускаться решение должно при вызове функции t7. */

a7_res = [];
str7 = 'hello world hi mazai';
function t7() {
    a7_res.push(str7.split(" "));
    console.log(a7_res);
    
document.querySelector('.out-7').innerHTML = a7_res;
}

document.querySelector('.b-7').onclick = t7;