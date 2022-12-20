// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function User(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, geoLat, geoLng, phone, website, companyName, companyCathPhrase, companyBs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: addressStreet,
        suite: addressSuite,
        city: addressCity,
        zipcode: addressZipcode,
        geo: {lat: geoLat, lng: geoLng}
    };
    this.phone = phone;
    this.website = website;
    this.company = {name: companyName, catchPhrase: companyCathPhrase, bs: companyBs};
}

console.log(new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org','Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
// -Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
function Tags(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2,actionOfAttr2) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [
        {titleOfAttr1: titleOfAttr1, actionOfAttr1: actionOfAttr1},
        {titleOfAttr2: titleOfAttr2, actionOfAttr2: actionOfAttr2},
    ];
}
console.log(new Tags('area', 'Задає чутливі області','shape','Форма області', 'href', 'Посилання при клацанні на області мишею'))
// Таким чином описати теги
// -a
let a = new Tags('a', 'Створює гіперпосилання на іншу веб-сторінку, інтернет ресурс або файл', 'target=”_Blank”, Відкриття документа в новому вікні', 'target=”_Top”',  'Відкриття документа в поточному вікні');
console.log(a);
// -div
let div = new Tags('div', 'Важливий тег, використовується для форматування великих блоків тексту HTML документа,', 'align','Задает выравнивание содержимого тега','title','Добавляет всплывающую подсказку к содержимому.');
console.log(div);
let h1 = new Tags('h1', 'Заголовок первого уровня', 'align','Определяет выравнивание заголовка','no','no');
// -h1
console.log(h1);
// -span
let span = new Tags('span', 'предназначен для определения строчных элементов документа.', 'accesskey','Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.','hidden','Скрывает содержимое элемента от просмотра.');
console.log(span);
// -input
let input = new Tags('input', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', 'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.','form','Связывает поле с формой по её идентификатору.');
console.log(input);
// -form
let form = new Tags('form', 'устанавливает форму на веб-странице.', 'action','Адрес программы или документа, который обрабатывает данные формы.','name','Имя формы');
console.log(form);
// -option
let option = new Tags('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера ', 'disabled','Заблокировать для доступа элемент списка.','label','Указание метки пункта списка.');
console.log(option);
// -select
let select = new Tags('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка,', 'autofocus','Устанавливает, что список получает фокус после загрузки страницы.','multiple','Позволяет одновременно выбирать сразу несколько элементов списка.');
console.log(select);
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }