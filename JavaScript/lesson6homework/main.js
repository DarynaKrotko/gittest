// - Знайти та вивести довижину наступних стрінгових значень
// let a ='hello world';
// console.log(a.length);
// let b ='lorem ipsum';
// console.log(b.length);
// let c ='javascript is cool';
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a ='hello world';
// console.log(a.toUpperCase());
// let b ='lorem ipsum';
// console.log(b.toUpperCase());
// let c ='javascript is cool';
// console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a ='HELLO WORLD';
// console.log(a.toLowerCase());
// let b ='LOREM IPSUM';
// console.log(b.toLowerCase());
// let c ='JAVASCRIPT IS COOL';
// console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.length);
// let cleanstr =str.trim();
// console.log(cleanstr.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let str = numbers.map(num => num+' ');
// console.log(str);
//можна ще було зробити це завдання так
//let str = numbers.map(num => num.toString());
//або
//let str = numbers.map(num => String(num));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums(direction) {
//     if(direction === 'ascending'){
//         let x =nums.sort(function (a,b){
//             return a-b;
//         })
//         console.log(x);
//     }
//     if(direction === 'descending'){
//         let y =nums.sort(function (a,b){
//                 return b-a;
//             })
//             console.log(y);
//     }
// }
// (sortNums('descending'));
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort(function (a, b) {
//     return b.monthDuration - a.monthDuration;
// }));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(course => course.monthDuration > 5);
// console.log(filter);


// описати колоду карт

let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];
// - знайти піковий туз
// let spadeAce = deck.filter(card=> card.cardSuit === 'Spade' && card.value === 'Ace');
// console.log(spadeAce);

// // - всі шістки
// let sixes = deck.filter(card => card.value === 6);
// console.log(sixes);

// // - всі червоні карти
// let red = deck.filter(card => card.color === 'Red');
// console.log(red);

// // - всі буби
// let diamonds = deck.filter(card => card.cardSuit === 'Diamonds');
// console.log(diamonds);

// // - всі трефи від 9 та більше
// let clubs = deck.filter(card => card.cardSuit === 'Clubs' && (card.value >9 || card.value.length > 2));
// console.log(clubs);
//можна було ще через typeof value  === 'string';
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
let reduce = deck.reduce((accumulator,card)=>{
    // if(card.cardSuit === 'Spade'){
    //     accumulator.spades.push(card.cardSuit+card.value);
    // }
    if(card.cardSuit === 'Spade'){
        accumulator.spades.push(card);
    }
    else if(card.cardSuit === 'Diamonds'){
        accumulator.diamonds.push(card.cardSuit+card.value);
    }
    else if(card.cardSuit === 'Hearts'){
        accumulator.hearts.push(card.cardSuit+card.value);
    }
    else if(card.cardSuit === 'Clubs'){
        accumulator.clubs.push(card.cardSuit+card.value);
    }
    return accumulator;
},{spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(reduce);
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }