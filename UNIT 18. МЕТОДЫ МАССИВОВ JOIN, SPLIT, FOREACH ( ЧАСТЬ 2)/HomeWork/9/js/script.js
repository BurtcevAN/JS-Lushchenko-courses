// Task 9 ============================================
/*  Дан массив a9 = [[hi, mahai], [test, best]] - преобразуйте его в строку. Разделитель - дефис. Результат присвойте a9_res. Запускаться решение должно при вызове функции t9. Допускается лишний дефис в конце строки!!! */

function t9() {
    a9_res = ' ';
    a9 = [["hi", "mahai"], ["test", "best"]];

    for(let i = 0; i < a9.length; i++){
        a9_res += a9[i].join("-") + "-";
    }
    console.log(a9_res);
document.querySelector('.out-9').innerHTML = a9_res;
}

document.querySelector('.b-9').onclick = t9;