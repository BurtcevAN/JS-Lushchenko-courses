// Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.

document.querySelector('.b-9').onclick = () => {
      const r9 = document.querySelector('.r-9');
      const div = document.querySelector('.out-9');

if(r9.checked){
      div.innerHTML = r9.value;
}
else{
      div.innerHTML = 0;
}
};





