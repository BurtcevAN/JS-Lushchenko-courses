//  Task 1
// С помощью вложенных циклов, нарисуйте строку:
// 
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

let div = document.querySelector('.out');

function t1 () {
    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 3; k ++){
            div.innerHTML += "*";
        }
    div.innerHTML += "_";
    }
}

document.querySelector('.b-1').onclick = t1;