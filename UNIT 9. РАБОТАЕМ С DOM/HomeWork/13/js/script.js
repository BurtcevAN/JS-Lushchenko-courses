//  Task 13
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.

let div13 = document.querySelector('.out-13');
 
function f13() {
    const a = document.createElement('div');
    a.innerText = "pushMe";
    a.classList.add('bg-13');
    div13.appendChild(a);
    document.querySelector('.bg-13').onclick = f13_1;

}

function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}

document.querySelector('.b-13').onclick = f13;
