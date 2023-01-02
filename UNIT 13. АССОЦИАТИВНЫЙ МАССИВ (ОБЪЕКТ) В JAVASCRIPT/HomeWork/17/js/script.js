// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
};

out = document.querySelector('.out-17');

function f17() {
    for(let key in a17){
        if(a17[key].age > 30)
    out.innerHTML += a17[key].age + " ";
    }
}

document.querySelector('.b-17').onclick = f17;