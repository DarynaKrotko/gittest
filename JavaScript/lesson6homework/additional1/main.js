// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// debugger;
// function cutString(str,n) {
//     let result = [];
//     for (let i = 0; i < str.length; i += n) {
//         let piece =str.substring(i, i + n);
//         result.push(piece);
//     }
//     return result;
// }
// document.writeln(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     let arr = str.split(' ');
//     let res = [];
//     for (const word of arr) {
//         if(word.length === length){
//             res.push(word);
//         }
//     }
//     return res;
// }
// document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// function insert_dash(arguments) {
//     let bigLetters = arguments.toUpperCase();
//     return bigLetters.replaceAll(' ', '-');
// }
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'quick monkey';
// function firstLetter(arguments) {
//     return arguments[0].toUpperCase() + arguments.substring(1);
// }
// console.log(firstLetter(str));

// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let normal = (str) =>{
//     let normalStr = str.replaceAll(/[-._]/g,' ');
//     return normalStr.replaceAll('  ', ' ');
//
// }
// console.log(normal(n2));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function randomNumbers() {
//     let arr = [];
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random()*(100)));
//     }
//     return arr;
// }
// console.log(randomNumbers());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// function randomNumbers() {
//     let arr = [];
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random()*(100)));
//     }
//     arr.sort(function (a, b) {
//         return a-b;
//     });
//     return arr;
// }
// console.log(randomNumbers());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// function randomNumbers() {
//     let arr = [];
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random()*(100)));
//     }
//     return arr.filter(num => num % 2 === 0 && num != 0);
// }
// console.log(randomNumbers());


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let words = 'Каждый охотник желает знать';
// function capitalize(str) {
//     let arr = str.split(' ');
//     let result = [];
//     for (const word of arr) {
//         result.push(word[0].toUpperCase() + word.substring(1));
//     }
//     return result.join(' ');
// }
// console.log(capitalize(words));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// function validator(mail) {
//     let snail = mail.indexOf('@');
//     let dot = mail.indexOf('.');
//     if(snail && snail >=1 && dot > snail + 2){
//         return mail;
//     }
//     else{
//         console.log('Your email is not valid')
//     }
// }
// console.log(validator('someemail@gmail.com'));
// console.log(validator('someeMAIL@gmail.com'));
// console.log(validator('someeMAIL@i.ua'));
// console.log(validator('some.email@gmail.com'));
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// console.log(coursesArray.sort(function (a,b) {
//     return b.modules.length - a.modules.length;
// }));
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "н";
// let str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     let number = 0;
//     for (const letter of str) {
//         if(letter === symb){
//             number++;
//         }
//     }
//     return number;
// }
// document.writeln(count(str, symb));
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let cutString = (str,n) => {
//     let arr = str.split(' ');
//     return arr.slice(0, n).join(' ');
// }
// document.writeln(cutString(str, 5));
// -створити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title: 'The Old Man and The Sea ', pageCount: 345, authors: ['Ernest Hemingway'], genre: ['novel']},
    {title: 'Blue Fins', pageCount: 156, authors: ['Sarah Axten','Macmillan'], genre: ['adventures']},
    {title: ' Red roses', pageCount: 567, authors: ['Christine Lindop'], genre: ['romantic']},
    {title: 'Dead man’s money', pageCount: 987, authors: ['John Escott'], genre: ['adventures']},
    {title: 'Robinson Crusoe', pageCount: 677, authors: ['Daniel Defoe'], genre: ['Fantasy', 'romantic']}
];
// -знайти найбільшу книжку.
// function bigBook (arr){
//     books.sort(function (a,b) {
//         return b.pageCount - a.pageCount;
//     })
//     return books[0];
// }
// console.log(bigBook(books));
// - знайти книжку/ки з найбільшою кількістю жанрів
// function genre (arr){
//     books.sort(function (a,b) {
//         return b.genre.length - a.genre.length;
//     })
//     return books[0];
// }
// console.log(genre(books));
// - знайти книжку/ки з найдовшою назвою
// function title (arr){
//     books.sort(function (a,b) {
//         return b.title.length - a.title.length;
//     })
//     return books[0];
// }
// console.log(title(books));
// - знайти книжку/ки які писали 2 автори
// let author1 = (arr)=> arr.filter(book =>book.authors.length === 2);
// console.log(author1(books));
// - знайти книжку/ки які писав 1 автор
// let author2 = (arr)=> arr.filter(book =>book.authors.length === 1);
// console.log(author2(books));
// - вісортувати книжки по кількості сторінок по зростанню
// function bigBook (arr){
//     books.sort(function (a,b) {
//         return a.pageCount - b.pageCount;
//     })
//     return books;
// }
// console.log(bigBook(books));