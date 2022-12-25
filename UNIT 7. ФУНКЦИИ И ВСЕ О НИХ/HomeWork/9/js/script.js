// Task 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t9(num) {
    if ( num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(16);
};