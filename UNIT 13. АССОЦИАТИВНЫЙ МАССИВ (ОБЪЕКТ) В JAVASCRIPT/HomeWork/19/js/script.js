// Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
};

let out = document.querySelector(".out-19");
function f19() {
    let i19 = document.querySelector('.i-19').value;
    for(let key in a19){
        for (let i = 0; i < a19[key].length; i++){
            if(a19[key][i] == i19 || a19[key][i].toLowerCase() == i19  ){
                out.innerHTML += key;
            }
            else{
                out.innerHTML += "";
            }
        }
    }
}

document.querySelector('.b-19').onclick = f19;