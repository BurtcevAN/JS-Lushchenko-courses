// Task 8 ============================================
/*  Дан массив a8 = [1,2,66,77,15] - преобразуйте ее в строку. Разделитель - дефис. Результат присвойте a8_res. Запускаться решение должно при вызове функции t8. */
a8 = [1,2,66,77,15];
a8_res = '';
function t8() {
    a8_res = a8.join('-');
    console.log(a8_res);
    
document.querySelector('.out-8').innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = t8;