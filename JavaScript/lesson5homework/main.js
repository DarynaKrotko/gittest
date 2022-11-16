// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//     return a*b;
// }
// let x =area(10, 30);
// console.log(x);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let area = (r) => {return r**2 *3.14;}
// let res = area(5);
// console.log(res);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(r,h){
//     return 2*3.14*r*h;
// }
// let res =area(2,5);
// console.log(res);
// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayWriter (arr){
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// arrayWriter([2, 3, 5, 'asd', false]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function addP (text){
//     document.write(`<p> ${text}</p>`);
// }
// addP('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// }
// list('hi');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li> ${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('hello', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(...arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li> ${arr[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// list(3,true,'str', false, 456,'dog');
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [
//     {
//         id: 1,
//         name: 'Vasya',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'Ostap',
//         age: 31
//     },
//     {
//         id: 3,
//         name: 'Ihor',
//         age: 23
//     }
// ]
// function usersArr(arr) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`);
//     }
// }
// usersArr(array);
// - створити функцію яка повертає найменьше число з масиву
// let numbers =[11, 35, 56,48,5, 6];
// function count(arr) {
//     let start = numbers[0];
//     for (const arrElement of numbers) {
//         if (arrElement < start){
//             start = arrElement;
//         }
//     }
//     return start;
// }
// count(numbers);
// let count1 = count(numbers);
// console.log(count1);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [1,2,10];
// function sum(num) {
//     let zero = 0;
//     for (const number of num) {
//         zero += number;
//     }
//     return zero;
// }
// sum(numbers);
// let x = sum(numbers);
// console.log(x);