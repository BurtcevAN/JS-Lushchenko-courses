// Task 10 ============================================
/*  Дан массив a10 = {name: ivan, age: 15, sex: 1, id: 45} - преобразуйте его в query строку ( так передаются GET параметры). Найдите описание что такое query строка самостоятельно. Разделитель - амперсанд. Результат присвойте a10_res. Запускаться решение должно при вызове функции t10. Допускается лишний амперсанд в конце строки!!! */

function t10() {
    a10_res = '';
    let a10 = {name: "ivan", age: 15, sex: 1, id: 45};
       for(let key in a10){
        a10_res += `${key}=${a10[key]}&`;
       }
        document.querySelector('.out-10').innerHTML = a10_res;
    }
    
    document.querySelector('.b-10').onclick = t10;