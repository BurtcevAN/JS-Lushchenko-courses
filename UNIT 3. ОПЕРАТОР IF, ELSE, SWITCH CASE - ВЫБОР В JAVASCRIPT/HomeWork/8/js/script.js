// 8) Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

function f8 () {
    let a = +document.querySelector('.s-8').value;
    let div = document.querySelector('.out-8');

    switch(a){
    case 1:
        div.innerHTML = 'one';
        break;
    case 2:
        div.innerHTML = 'two';
        break;
    case 3:
        div.innerHTML = 'three';
        break;
    }
}
document.querySelector('.b-8').onclick = f8;