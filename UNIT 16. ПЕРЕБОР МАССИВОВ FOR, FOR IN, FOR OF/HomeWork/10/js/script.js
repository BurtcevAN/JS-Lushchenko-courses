// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let arr = {};
    for (let i = 0; i < a10.length; i++ ){
        let item = a10[i];
       arr[item] = item;
    }
    return arr;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});