// Task 18
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
};

let out = document.querySelector('.out-18');

function f18() {
    let i18 = document.querySelector('.i-18').value;
    let key = i18;
        if  (key in a18){
            for( let i = 0; i < a18[key].length; i++){
            let a = 0;
            a = a18[key][i];
            out.innerHTML += a + " ";
            }
        }
        else{
        out.innerHTML = "";
        }
}

document.querySelector('.b-18').onclick = f18;