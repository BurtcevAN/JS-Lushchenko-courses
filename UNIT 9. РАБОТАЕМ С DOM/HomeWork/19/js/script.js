//  Task 19
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.
const div19 = document.querySelector(".out-19");
const p = document.querySelectorAll('.p-19');
console.log(p);
function f19() {
    for(i = 0; i < p.length; i++){
    let a = p[i].getAttribute('data');
    div19.innerHTML += a +" ";
    }
}

document.querySelector('.b-19').onclick = f19;