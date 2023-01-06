// Task 3 ============================================
/*  Дан массив a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'] - с помощью forEach переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом. Запускаться решение должно при вызове функции t3.*/
a3_res = [];
let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
function t3() {
    a3.forEach(elem => {
    if(typeof (elem) == "number"){
        a3_res.push(elem);
    }
    });
document.querySelector('.out-3').innerHTML = a3_res;
}

document.querySelector('.b-3').onclick = t3;