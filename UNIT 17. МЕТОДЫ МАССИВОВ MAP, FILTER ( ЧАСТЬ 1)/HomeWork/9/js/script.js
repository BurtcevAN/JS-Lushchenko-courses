// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b9 и создайте массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решите с помощью filter. Действия должны запускаться при вызове функции t9. */

let b9 = [3, "hello", 4, "world", 5, "hi"];
let b9_num = [];
b9_string = [];
function t9() {
    b9.filter(elem => {
        if( typeof (elem) == "number"){
            b9_num.push(elem);
        }
        else{
            b9_string.push(elem);
        }
    });
    return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
};