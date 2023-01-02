// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
};

let out = document.querySelector(".out-20");
function f20() {
    for (let key in a20){
        for(i = 0; i < a20[key].length; i++){
            if(a20[key][i][1] == 2){
                out.innerHTML += a20[key][i][0] + " ";
            }
        }
    }
}

document.querySelector('.b-20').onclick = f20;