// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [9, -2, 'string', false, 'dog', 100500, 2.3, -4.5, true, 'cat'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'one day',
    pageCount: 123,
    genre: 'humor'
}
console.log(book1);
let book2 = {
    title: 'all about love',
    pageCount: 256,
    genre: 'drama'
}
console.log(book2);
let book3 = {
    title: 'good company',
    pageCount: 344,
    genre: 'romance'
}
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'one day',
    pageCount: 123,
    genre: 'humor',
    authors: [
        {name: 'Scaachi Koul', age: 31}
    ]
}
console.log(book4);
let book5 = {
    title: 'all about love',
    pageCount: 256,
    genre: 'drama',
    authors: [
        {name: 'Bell Hooks', age: 42}
    ]
}
console.log(book5);
let book6 = {
    title: 'good company',
    pageCount: 344,
    genre: 'romance',
    authors: [
        {name: 'Cynthia Daprix Sweeney', age: 25}
    ]
}
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let array2 = [
    {name: 'petya', username:'p001', password: 100},
    {name: 'olya', username:'o200', password: 200},
    {name: 'sasha', username:'s456', password: 456},
    {name: 'artur', username:'a878', password: 878},
    {name: 'natalya', username:'n372', password: 372},
    {name: 'misha', username:'m345', password: 345},
    {name: 'karina', username:'kar236', password: 236},
    {name: 'dmytro', username:'d900', password: 900},
    {name: 'serhiy', username:'s123', password: 123},
    {name: 'kateryna', username:'kat333', password: 333}
]
let user0 = array2[0];
console.log(user0.password);
console.log(array2[1].password);
console.log(array2[2]['password']);
console.log(array2[3].password);
console.log(array2[4].password);
console.log(array2[5].password);
console.log(array2[6].password);
console.log(array2[7].password);
console.log(array2[8].password);
console.log(array2[9].password);
