// Task 12
//  При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.

function f5(arr, block) {

    let out = " ";
    for(let key in arr){  
    out+= `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML =  out;
}

let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12() {
    let i12 = document.querySelector('.i-12').value;
    for(let key in a12){
       if(i12 == a12[key]){
            delete a12[key];
        }
        console.log(a12);
    }

    f5(a12,".out-12");
}

document.querySelector('.b-12').onclick = f12;






// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.

// function f5(arr, block) {

//     let out = " ";
//     for(let key in arr){  
//     out+= `${key} : ${arr[key]} <br>`;
//     }
//     document.querySelector(block).innerHTML =  out;
// }

// let a11 = {
//     "b": 17,
//     "e": 22,
//     "j": 17,
//     "k": 22,
//     "d": 54
// };

// function f11() {
//     let i11 = document.querySelector('.i-11').value;
//     if (a11[i11]) {
//         delete a11[i11];
//     }
//     console.log(a11);
//          f5(a11,".out-11");
// }

// document.querySelector('.b-11').onclick = f11;