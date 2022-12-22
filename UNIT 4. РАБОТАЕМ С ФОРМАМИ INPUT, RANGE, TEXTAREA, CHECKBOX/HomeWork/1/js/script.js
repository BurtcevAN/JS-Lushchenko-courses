// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.

document.querySelector(".b-1").onclick = () => {
   alert(document.querySelector("span").textContent);
};