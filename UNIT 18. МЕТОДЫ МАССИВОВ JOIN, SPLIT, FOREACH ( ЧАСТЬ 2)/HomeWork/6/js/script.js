// Task 6 ============================================
/*  Дана строка str6='helloworld' - преобразуйте ее в массив и присвойте a6_res. Выведите на страницу. Запускаться решение должно при вызове функции t6. */
a6_res = [];
str6 = 'helloworld';
function t6() {
    a6_res.push(str6.split());
    console.log(a6_res);
    
document.querySelector('.out-6').innerHTML = a6_res;
}

document.querySelector('.b-6').onclick = t6;