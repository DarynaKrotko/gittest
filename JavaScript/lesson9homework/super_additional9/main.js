
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let arr = [];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     arr.push(user.address);
// }
// console.log(arr);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let div = document.createElement('div');
//     div.innerText = `
//     name:${user.name},
//     age:${user.age},
//     status:${user.status},
//     address:
//     city:${user.address.city},
//     country:${user.address.country},
//     street: ${user.address.street},
//     houseNumber:${user.address.houseNumber}`;
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let div = document.createElement('div');
//     for (const userKey in user) {
//         if(typeof user[userKey] === 'object'){
//             let addressDiv = document.createElement('div');
//             addressDiv.innerText = `address:
//             city:${user.address.city},
//             country:${user.address.country},
//             street: ${user.address.street},
//             houseNumber:${user.address.houseNumber}`;
//             div.appendChild(addressDiv)  ;
//         }
//         if(typeof user[userKey] !== 'object'){
//             let userDiv = document.createElement('div');
//             userDiv.innerText = `${userKey}: ${user[userKey]}`;
//             div.appendChild(userDiv);
//         }
//
//     }
//     document.body.appendChild(div);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//     let div = document.createElement('div');
//     for (const userKey in user) {
//         if(typeof user[userKey] === 'object'){
//             let addressDiv = document.createElement('div');
//             for (const keyInUserKey in user[userKey]) {
//                 let divKeyInKey = document.createElement('div');
//                 divKeyInKey.innerText = `${keyInUserKey}: ${user[userKey][keyInUserKey]}`;
//                 addressDiv.appendChild(divKeyInKey);
//             }
//             div.appendChild(addressDiv);
//         }
//         else{
//             let keyDiv = document.createElement('div');
//             keyDiv.innerText = `${userKey}: ${user[userKey]}`;
//             div.appendChild(keyDiv);
//         }
//     }
//     document.body.appendChild(div);
// }
//
//
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// let divContent = document.getElementById('content');
// let ul = document.createElement('ul');
// let ul1 = divContent.appendChild(ul);
// let divWrap = document.body.querySelectorAll('#wrap>div');
// for (const wrap of divWrap) {
//     let wrapChildren = wrap.children;
//     //Варіант 1 (виводить однією li зміст і заголовка і параграфа,
//     // буде працювати при зміні кількості блоків з id=wrap
//     // але не при зміні кількості заголовків і параграфів в ньому)
//     // let li = document.createElement('li');
//     // li.innerHTML = `${wrapChildren[0].innerHTML} <br> ${wrapChildren[1].innerHTML} `;
//     // ul1.appendChild(li);
//     //Варіант 2 (гнучкий до зміни кількості блоків з id=wrap і до зміни кількості дочірніх елементів в ньому
//     // але виводить кожен дочірній елемент в окремій li)
//     // for (const wrapChild of wrapChildren) {
//     //     let li = document.createElement('li');
//     //     li.innerText = wrapChild.innerHTML;
//     //     ul1.appendChild(li);
//     // }
//     //Варіант 3(якщо треба було вивести в якості li тільки заголовки, тобто h2);
//     for (const wrapChild of wrapChildren) {
//     if(wrapChild.tagName === 'H2'){
//         let li = document.createElement('li');
//         li.innerText = wrapChild.innerHTML;
//         ul1.appendChild(li);
//     }
// }}
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить  кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// for (const rule of rules) {
//     let wrap = document.createElement('div');
//     for (const ruleKey in rule) {
//         let divH = document.createElement('div');
//         let h2 = document.createElement('h2');
//         h2.innerText = rule[ruleKey];
//         divH.appendChild(h2);
//         let divP = document.createElement('div');
//         let p = document.createElement('p');
//         p.innerText = rule[ruleKey];
//         divP.appendChild(p);
//         wrap.append(divH,divP);
//     }
//     document.body.appendChild(wrap);
// }