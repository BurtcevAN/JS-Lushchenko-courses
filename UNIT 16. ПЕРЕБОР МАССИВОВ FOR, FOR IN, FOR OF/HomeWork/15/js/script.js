// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).

function f15() {
    let arr = document.querySelectorAll('.out-15');
    console.log(arr);
    for(let item of arr){
       item.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);
