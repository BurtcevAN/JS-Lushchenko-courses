//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

function t2() {
    let div = document.querySelector('.out');
    for(i = 1; i < 4; i = i + 1){
        div.innerHTML += "<br>" + i + "<br>";
             for( k = 0; k < 3; k = k + 1){
            div.innerHTML += "*_";
        }
    }
}  
document.querySelector('.b-2').onclick = t2;