// Task 4 ============================================
/*  На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach переберите их и добавьте атрибуты в массив a4_res  Запускаться решение должно при вызове функции t4.*/
a4_res = [];

function t4 () {
    
    let arr = document.querySelectorAll('.task-4');
    arr.forEach(elem => {
        a4_res.push(elem.getAttribute("data"));
    });

document.querySelector('.out-4').innerHTML = a4_res;
}
document.querySelector('.b-4').onclick = t4;