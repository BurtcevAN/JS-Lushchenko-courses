// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

function f3() {
   let divs = document.getElementsByClassName('out-3');
   console.log(divs);
   for(let i = 0; i < divs.length; i++){
      divs[i].innerHTML += 3;
   }
}

document.querySelector('.b-3').addEventListener('click', f3);