// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

function f20(e) {
   e.preventDefault();
   let form = document.querySelector('.f-20');
      let a = form.elements["username"].value;
      let b = form.elements["password"].value;
   document.querySelector(".out-20").innerHTML = a + " " + b;
}

document.querySelector('.b-20').onclick = f20;
