// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for(let i=0, j=0; i <=100;i++){
//     if(i % 2 === 0){
//         arr[j]=i;
//         j++;
//     }
// }
// console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for(let i=0, j=0; i <=100;i++){
//     if(i % 2 !== 0){
//         arr[j]=i;
//         j++;
//     }
// }
// console.log(arr);
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.round(Math.random()*100);
// }
// console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.round(Math.random()*(732 - 8) + 8);
// }
// console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемен
// let arr = [23, 45, 56, 676, 900, 432, 545, 490, 395, 860, 720, 340,300];
// for (let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [23, 45, 56, 676, 900, 432, 545, 490, 395, 860, 720, 340,300];
// for (let i = 0; i < arr.length; i += 3) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [23, 45, 56, 676, 900, 432, 545, 490, 395, 860, 720, 340,300];
// let arr2 =[];
// for (let i = 0, j = 0; i < arr.length; i += 3) {
//     if(arr[i] % 2 === 0){
//         arr2[j] = arr[i];
//         j++;
//     }
// }
// console.log(arr2);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE:
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// // -> Має бути виведено 1, 9, 56
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i+1]% 2 === 0){
//         console.log(arr[i]);
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// let middleCheck = Math.round(sum/arr.length);
// console.log(middleCheck);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let arr2 = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.round(Math.random()*(10 - 1) + 1);
//     arr2[i] = arr[i]*5;
// }
// console.log(arr);
// console.log(arr2);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = [2,'asd', true, 456, 'dog', false, 0.34, 'str'];
// let arr2 =[];
// for (let i=0, j=0; i<arr.length; i++) {
//     if(typeof arr[i] === "number"){
//         arr2[j] = arr[i];
//         j++;
//     }
// }
// console.log(arr2);



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities=[];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if(usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i].address = citiesWithId[j];
        }
    }
    usersWithCities[i] = usersWithId[i];
}
console.log(usersWithCities);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numbers = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
// for (const number of numbers) {
//     if(number % 2 === 0){
//         console.log(number);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let numbers = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
// let empty = [];
// for (let i = 0; i < numbers.length; i++) {
//     empty[i] = numbers[i];
// }
// console.log(empty);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let letters =[ 'a', 'b', 'c'];
// let word = "";
// for (let i = 0; i < letters.length; i++) {
//     word = word + letters[i];
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i < letters.length){
//     word = word + letters[i];
//     i++
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (let letter of letters) {
//     word = word + letter;
// }
// console.log(word);