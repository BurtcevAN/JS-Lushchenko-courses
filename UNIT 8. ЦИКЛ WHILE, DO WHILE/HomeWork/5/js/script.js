//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let out = document.querySelector('.out-5');
function t5() {
    let p = 0;
    while (p < 17){
        p++;
        if (p % 2 == 0){
            out.textContent += p + "_**";
        }
        else{
            out.textContent += p + "_*";
        } 
    }
}

document.querySelector('.b-5').onclick = t5;