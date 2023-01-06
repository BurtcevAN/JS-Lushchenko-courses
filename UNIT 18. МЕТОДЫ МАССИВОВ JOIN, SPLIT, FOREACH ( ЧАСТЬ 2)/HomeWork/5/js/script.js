// Task 5 ============================================
/*  На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.*/
a5_res = [];

function t5() {

    a5_res.push(this.getAttribute("data"));
    document.querySelector('.out-5').innerHTML = a5_res;
}

document.querySelectorAll('.task-5').forEach(elem => {
    elem.onclick = t5;
});