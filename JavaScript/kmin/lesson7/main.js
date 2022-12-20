// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let container = document.createElement('div');
// let element = document.createElement('div');
// element.innerText = 'Hello';
// element.setAttribute('id', 'text');
// let button = document.createElement('button');
// button.innerText = 'Click to hide hello';
// button.onclick = function () {
//     element.style.display = 'none';
// }
// container.append(element, button);
// document.body.appendChild(container);

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// let button = document.createElement('button');
// button.innerText = 'Good bye!';
// button.onclick = function () {
//     button.style.display = 'none';
// }
// document.body.appendChild(button);

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// let form = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('type', 'number');
// let button = document.createElement('button');
// button.innerText = 'Send your age';
// form.append(input, button);
// document.body.appendChild(form);

// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('type', 'number');
// let button = document.createElement('button');
// button.innerText = 'Send your age';
// button.onclick = function () {
//     if (input.value < 18){
//         alert('Перегляд тільки для повнолітніх, давай па');
//     }
//     else{
//         alert('Приємного перегляду!');
//     }
// }
// form.append(input, button);
// document.body.appendChild(form);

// - Створіть меню, яке розгортається/згортається при клику
// let container = document.createElement('div');
// let div = document.createElement('div');
// div.innerText = 'Tipa menu';
// let button = document.createElement('button');
// button.innerText = 'Click me';
// button.onclick = function () {
//     if(div.style.display === 'block'){
//         div.style.display = 'none';
//     }
//     else{
//         div.style.display = 'block';
//     }
// }
// container.append(div, button)
// document.body.appendChild(container);
//

// - Створіть список коментарів, приклад об'єкту коментаря -{title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// Вивести список коментарів в документ, кожний в своєму блоці.
// Додайте кожному коментарю по кнопці для згортання його body.
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// for (const comment of comments) {
//     let container = document.createElement('div');
//     let divTitle = document.createElement('div');
//     divTitle.innerText = comment.title;
//     let button = document.createElement('button');
//     button.innerText = 'Hide body';
//     button.onclick = function () {
//         if(divBody.style.display === 'block'){
//             divBody.style.display = 'none';
//         }
//         else{
//             divBody.style.display = 'block';
//         }
//     }
//     divTitle.appendChild(button);
//     let divBody = document.createElement('div');
//     divBody.innerText = comment.body;
//     container.append(divTitle,divBody);
//     document.body.appendChild(container);
// }

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let container = document.createElement('div');
//
// let form1 = document.createElement('form');
// form1.setAttribute('action', '');
// form1.setAttribute('name', 'form1');
//
// let input1 = document.createElement('input');
// input1.setAttribute('type', 'text');
// input1.setAttribute('placeholder', 'name');
// input1.setAttribute('name','userName');
//
// let input2 = document.createElement('input');
// input2.setAttribute('type', 'number');
// input2.setAttribute('placeholder', 'enter your age');
// input2.setAttribute('name','userAge');
// form1.append(input1, input2);
//
//
// let form2 = document.createElement('form');
// form2.setAttribute('action', '');
// form2.setAttribute('name', 'form2');
//
// let input3 = document.createElement('input');
// input3.setAttribute('type', 'email');
// input3.setAttribute('placeholder', 'enter your email');
// input3.setAttribute('name','userEmail');
//
// let input4 = document.createElement('input');
// input4.setAttribute('type', 'password');
// input4.setAttribute('placeholder', 'enter your password');
// input4.setAttribute('name','userPassword');
// form2.append(input3, input4);
//
// let button = document.createElement('button');
// button.innerText = 'Click me';
//
// button.onclick = function () {
//     console.log(`${document.forms.form1.userName.value} ${document.forms.form1.userAge.value}`);
//     console.log(`${document.forms.form2.userEmail.value} ${document.forms.form2.userPassword.value}`)
// }
// container.append(form1, form2, button);
// document.body.appendChild(container);

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

let div = document.createElement('div');
document.body.appendChild(div);
function tableCreator(tr, td, element) {
    let table = document.createElement('table');
    table.style.border = `2px solid black`;
    element.appendChild(table);
    for (let i = 0; i < tr; i++) {
        let trElem = document.createElement('tr');
        for (let j = 0; j < td; j++) {
            let tdElem = document.createElement('td');
            tdElem.innerText = 'a';
            tdElem.style.border = `1px solid black`;
            trElem.append(tdElem);
        }
        table.append(trElem);
    }
}
tableCreator(3,4,div);
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ