// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('write number');
// if (x !== 0){
//     console.log('Вірно');
// }
// else{
//     console.log('Невірно');
// }

let x = 123;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('enter time');
if (time > 0 && time <= 15) {
    console.log('first');
}
else if (time > 15 && time <= 30){
    console.log('second');
}
else if(time > 30 && time <=45){
    console.log('third');
}
else if (time > 45 && time <=60){
    console.log('fourth');
}
else{
    console.log('????');
}
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25;
if(day >= 1 && day <= 10){
    console.log('first');
}
else if(day > 10 && day <= 20){
    console.log('second');
}
else if(day > 20 && day <=31){
    console.log('third');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = +prompt('enter number of the day')
switch (week) {
    case 1:
        document.write('<h1> Monday</h1>');
        break;
    case 2:
        document.write('<h1> Tuesday</h1>');
        break;
    case 3:
        document.write('<h1> Wednesday</h1>');
        break;
    case 4:
        document.write('<h1> Thursday</h1>');
        break;
    case 5:
        document.write('<h1> Friday</h1>');
        break;
    case 6:
        document.write('<h1> Saturday</h1>');
        break;
    case 7:
        document.write('<h1> Sunday</h1>');
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('enter number A');
let b = +prompt('enter number B');
if (a>b){
    document.write(a);
}
else if(a<b){
    document.write(b);
}
else if(a === b){
    document.write('Even numbers');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = prompt() || 'default';
console.log(y);