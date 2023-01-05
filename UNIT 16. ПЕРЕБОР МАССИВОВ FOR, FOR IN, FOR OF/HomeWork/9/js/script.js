// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [[4,3,2], [2,5], [0,0,0,0,0]];

function f9() {
    let max = '';
    for(let key in a9){
        for(let i = 0; i < a9.length; i++){
            if(a9[i].length > a9[key].length){
                max = a9[i].length-1;
            }
        }
    }
return max;
}

document.querySelector('.b-9').addEventListener('click', ()=>{
    document.querySelector('.out-9').innerHTML = f9();
});