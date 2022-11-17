// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c) {
//     if(a<b && a<c){
//         console.log(a);
//         return a;
//     }
//     else if(b<a && b<c){
//         console.log(b);
//         return b;
//     }
//     else{
//         console.log(c);
//         return c;
//     }
// }
// min(6,20,-1)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a,b,c) {
//     if(a>b && a>c){
//         console.log(a);
//         return a;
//     }
//     else if(b>a && b>c){
//         console.log(b);
//         return b;
//     }
//     else{
//         console.log(c);
//         return c;
//     }
// }
// max(7,2,-1)
// - створити функцію яка повертає найбільше число з масиву
// let max = (...arr) =>{
//     let x = arr[0];
//     for (const item of arr) {
//         if(item > x){
//             x = item;
//         }
//     }
//     console.log(x);
//     return x;
// }
// max(2,2,5,25,-1);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let middle = function (...arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length;
// }
// let result =middle(4,2,6);
// console.log(result);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function findMaxMin(){
//     let minNum = arguments[0];
//     let maxNum = arguments[0];
//     for (let number of arguments) {
//         if(number <minNum){
//             minNum=number;
//         }
//         if(number > maxNum){
//             maxNum = number;
//         }
//     }
//     console.log(maxNum);
//     return minNum;
// }
// findMaxMin(1,25,6,7,8,5);
// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomNumbersArr (...arr){
//     for (let i = 0; i < 10; i++) {
//         arr[i]=Math.round(Math.random()*100);
//     }
//     console.log(arr);
// }
// randomNumbersArr();
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomNumbersArr (limit,...arr){
//     for (let i = 0; i < 10; i++) {
//         arr[i]=Math.round(Math.random()*limit);
//     }
//     console.log(arr);
// }
// randomNumbersArr(5);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// let reverseArr = () =>{
//     let newArr =[];
//     for (let i = arr.length - 1, j=0; i >= 0; i--) {
//         newArr[j] = arr[i];
//         j++;
//     }
//     console.log(newArr);
// }
// reverseArr(arr);
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function twoOrOne (){
//     if(arguments.length ===1){
//         console.log(arguments[0]);
//     }
//     else if(arguments.length === 2){
//         let sum = arguments[0]+arguments[1];
//         console.log(sum);
//     }
// }
// twoOrOne(2,3);
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// let arr1= [1,2,3,4];
// let arr2= [2,3,4,5];
// let arrRes =[];
// function sumArr() {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(i===j){
//                 arrRes[i] =arr1[i]+arr2[j];
//             }
//         }
//     }
//     console.log(arrRes);
//     return arrRes;
// }
// sumArr(arr1,arr2);
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
let arr = [
    {id: 'Dima', age: 13},
    {model: 'Camry'}  //===> [ name, age, model ]
];
// function returnKeys() {
//     let arrKeys = [];
//     for (let i = 0,j=0; i < arr.length; i++) {
//         for (let key in arr[i]) {
//             arrKeys[j] = key;
//             j++;
//         }
//     }
//     console.log(arrKeys);
//     return arrKeys;
// }
// returnKeys(arr);
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function returnKeys() {
//     let arrKeys = [];
//     for (let i = 0,j=0; i < arr.length; i++) {
//         for (let key in arr[i]) {
//             arrKeys[j] = arr[i][key];
//             j++;
//         }
//     }
//     console.log(arrKeys);
//     return arrKeys;
// }
// returnKeys(arr);
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
