// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a3_res куда добавьте все элементы приведенные к числу. Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4,"3",6,7,"12",34,"56",78,90,11];
let a3_res = [];

function t3() {
    a3_res = a3.map(Number);
    return a3_res;
    }


document.querySelector('.b-3').onclick = () => {
    console.log(t3());
};