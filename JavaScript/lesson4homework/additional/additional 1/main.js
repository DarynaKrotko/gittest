// --створити масив з:
//     - з 5 числових значень
// let arrNum = [3, 4, 5.5, -6, 123];
// console.log(arrNum);
// - з 5 стічкових значень
// let arrStr = ['qwe', 'asd', 'zxc', 'rty', 'fgh'];
// console.log(arrStr);
// - з 5 значень стрічкового, числового та булевого типу
// let arrDiff = [3, 'asd', 456, true, false];
// console.log(arrDiff);
// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrEmpty = [];
// arrEmpty[0] = 345;
// arrEmpty[1] = true;
// arrEmpty[2] = 'asd';
// arrEmpty[3] = false;
// console.log(arrEmpty);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
//             0  1  2 3  4  5  6  7  8   9
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// console.log(numbers);
// 1. перебрати його циклом while
// let i = 0;
// while(i < numbers.length){
//     let number = numbers[i];
//     console.log(number);
//     i++;
// }

//     2. перебрати його циклом for
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while(i < numbers.length){
//     let number = numbers[i];
//     if (i % 2 != 0){
//         console.log(number);
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(i=0; i<numbers.length; i++){
//     if(i % 2 != 0){
//         console.log(numbers[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while(i< numbers.length){
//     let number = numbers[i];
//     if(number % 2 === 0){
//         console.log(number);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(i=0; i<numbers.length; i++){
//     let number = numbers[i];
//     if(number % 2 === 0){
//         console.log(numbers[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for(i=0; i < numbers.length; i++){
//     let number = numbers[i];
//     if(number % 3 === 0){
//         console.log('okten');
//     }
//     else{
//         console.log(number);
//     }
// }
// 8. вивести масив в зворотньому порядку.
// for(i= numbers.length-1; i >= 0; i--){
//     console.log(numbers[i]);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i = numbers.length-1;
// while(i >= 0) {
//     let number = numbers[i];
//     console.log(number);
//     i--;
// }


// for(i= numbers.length-1; i >= 0; i--){
//     console.log(numbers[i]);
// }

// let i = numbers.length-1;
// while(i >= 0){
//     let number = numbers[i];
//     if (i % 2 != 0){
//         console.log(number);
//     }
//     i--;
// }

// for(i=numbers.length-1; i >=0; i--){
//     if(i % 2 != 0){
//         console.log(numbers[i]);
//     }
// }

// let i = numbers.length-1;
// while(i >=0){
//     let number = numbers[i];
//     if(number % 2 === 0){
//         console.log(number);
//     }
//     i--;
// }

// for(i= numbers.length; i >=0; i--){
//     let number = numbers[i];
//     if(number % 2 === 0){
//         console.log(numbers[i]);
//     }
// }

// for(i=numbers.length-1; i >=0; i--){
//     let number = numbers[i];
//     if(number % 3 === 0){
//         console.log('okten');
//     }
//     else{
//         console.log(number);
//     }
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrNum = [1, 2, 3, 45, -67, 35.6, 56, -123, 100500, 89];
// for (let number of arrNum) {
//     console.log(number);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrStr = ['qwe', 'asd', 'zxc', 'rty', 'fgh', 'dfg', 'lkj', 'yui', 'plk','nmn'];
// for (let string of arrStr) {
//     console.log(string);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrDiff = [3, 'asd', 456, true, false,'plk','nmn', 56, -123, true];
// for (let arrDiffElement of arrDiff) {
//     console.log(arrDiffElement);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrDiff = [3, 'asd', 456, true, false,'plk','nmn', 56, -123, true];
// for (let arrDiffElement of arrDiff) {
//     if(typeof arrDiffElement === "boolean"){
//         console.log(arrDiffElement);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let arrDiffElement of arrDiff) {
//     if(typeof arrDiffElement === "number"){
//         console.log(arrDiffElement);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let arrDiffElement of arrDiff) {
//     if(typeof arrDiffElement === "string"){
//         console.log(arrDiffElement);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrEmpty = [];
// arrEmpty[0] = 345;
// arrEmpty[1] = true;
// arrEmpty[2] = 'asd';
// arrEmpty[3] = false;
// arrEmpty[4]= true;
// arrEmpty[5]= 'qwe';
// arrEmpty[6]= 456;
// arrEmpty[7]= 789;
// arrEmpty[8]= false;
// arrEmpty[9]= 'lkj';
// for (let arrEmptyElement of arrEmpty) {
//     console.log(arrEmptyElement);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i = 1; i <= 10; i++){
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i = 1; i <= 100; i++){
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(i = 1; i <= 100; i += 2){
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(i = 1; i <= 100; i ++){
//     if(i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(i = 1; i <= 100; i ++) {
//     if (i % 2 != 0) {
//     console.log(i);
//     document.write(i);}
// }

//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title: 'The Old Man and The Sea ', pageCount: 345, authors: ['Ernest Hemingway'], genre: ['novel']},
    {title: 'Blue Fins', pageCount: 156, authors: ['Sarah Axten','Macmillan'], genre: ['adventures']},
    {title: ' Red roses', pageCount: 567, authors: ['Christine Lindop'], genre: ['romantic']},
    {title: 'Dead man’s money', pageCount: 987, authors: ['John Escott'], genre: ['adventures', 'romantic']},
    {title: 'Robinson Crusoe', pageCount: 677, authors: ['Daniel Defoe'], genre: ['Fantasy']}
];
// -знайти найбільшу книжку.
// let count = books[0];
// for (const book of books) {
//     if(book.pageCount > count.pageCount){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки з найбільшою кількістю жанрів
// let count = books[0];
// for (const book of books) {
//     if(book.genre.length > count.genre.length){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки з найдовшою назвою
// let count = books[0];
// for (const book of books) {
//     if(book.title > count.title){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки які писали 2 автори
// let count = books[0];
// for (const book of books) {
//     if(book.authors.length > count.authors.length){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки які писав 1 автор
// for (const book of books) {
//     if(book.authors.length === 1){
//         console.log(book);
//     }
// }
