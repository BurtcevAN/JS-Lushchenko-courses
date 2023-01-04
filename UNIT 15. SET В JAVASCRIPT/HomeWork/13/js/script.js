// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


const f13 = () => {
    let arr13 = Array.from(str13);
    let set13 = new Set(arr13);
    let result = {};
        for (let symb of set13) {
        result[symb] = arr13.filter(s => s === symb).length;
        }
    return result;
};

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
};