// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
   let divs = document.querySelectorAll('.out-4');
   for(let i = 0; i < divs.length; i++){
      divs[i].innerHTML += 4;
   }
}

document.querySelector('.b-4').addEventListener('click', f4);