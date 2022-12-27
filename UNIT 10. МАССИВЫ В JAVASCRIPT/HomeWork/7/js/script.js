// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7
let out = document.querySelector('.out-7');
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
        ar7[5] = 'italy';
        ar7[6] = 'turkey';
        ar7[7] = 'vietnam';
                for(i = 0; i < ar7.length; i++){
                out.innerHTML += ar7[i] + " ";
                }
}

document.querySelector('.b-7').onclick = f7;