// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
users.push(new User(10,'vasya','lukin', 'vluk@g.com', 845645));
users.push(new User(25,'petya','moiseev', 'petmo@g.mail', 834645));
users.push(new User(46,'anna','vinogradova', 'anvino@g.com', 878678));
users.push(new User(74,'olya','matchina', 'omatcha@g.com', 823457));
users.push(new User(51,'zahar','garbuz', 'zagarbuz@g.com', 856745));
users.push(new User(66,'vlad','losev', 'vlados@g.com', 807890));
users.push(new User(92,'vikentiy','gogol', 'vikgo@g.com', 811223));
users.push(new User(37,'milana','kaleno', 'mailka@g.com', 855788));
users.push(new User(83,'valentina','polovinkina', 'valenpolov@g.com', 899775));
users.push(new User(103,'agnessa','eliseeva', 'agneseva@g.com', 845667));
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort(function (a,b) {
    return a.id-b.id;
}));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
clients.push(new Client(10,'vasya','lukin', 'vluk@g.com', 845645, ['ham', 'sausage','potato']));
clients.push(new Client(25,'petya','moiseev', 'petmo@g.mail', 834645,['meat','egg','macaroni','cheese']));
clients.push(new Client(46,'anna','vinogradova', 'anvino@g.com', 878678,['pizza','soup','rice','bread','butter']));
clients.push(new Client(74,'olya','matchina', 'omatcha@g.com', 823457,['bread','milk','pasta', 'sauce']));
clients.push(new Client(51,'zahar','garbuz', 'zagarbuz@g.com', 856745,['porridge','flour','ketchup','cocoa','jam']));
clients.push(new Client(66,'vlad','losev', 'vlados@g.com', 807890,['garlic','salad','bean']));
clients.push(new Client(92,'vikentiy','gogol', 'vikgo@g.com', 811223,['fish', 'chicken','cutlet']));
clients.push(new Client(37,'milana','kaleno', 'mailka@g.com', 855788,['pork','beef','vegetables']));
clients.push(new Client(83,'valentina','polovinkina', 'valenpolov@g.com', 899775,['steak','spice','caviar']));
clients.push(new Client(103,'agnessa','eliseeva', 'agneseva@g.com', 845667,['butter','cheese','tea']));
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort(function (a,b) {
    return b.order.length -a.order.length;
}));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:




function Car(model, maker, year, maxSpeed,engineCapacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}
let car = new Car('Audi RS-7', 'Germany', 2013, 250, 4);
console.log(car);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`) ;
}
car.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {

    console.log(`Модель - ${this.model}
Виробник - ${this.maker}
Рік випуску - ${this.year}
Максимальна швидкість - ${this.maxSpeed}
Об'єм двигуна - ${this.engineCapacity}`)
}
car.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
    return this.maxSpeed;
}
console.log(car.increaseMaxSpeed(50));
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
    return this.year;
}
console.log(car.changeYear(2020));
console.log(car);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
    return car;
}
car.addDriver({name: 'Neyzor', age: 23});
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
class Cars {
    constructor(model, maker, year, maxSpeed,engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
}
let cars = new Cars('Volkswagen Touareg', 'Germany', 2002, 200, 3);
console.log(cars);
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Cars.prototype.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`) ;
}
cars.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Cars.prototype.info = function () {
    console.log(`Модель - ${this.model}
Виробник - ${this.maker}
Рік випуску - ${this.year}
Максимальна швидкість - ${this.maxSpeed}
Об'єм двигуна - ${this.engineCapacity}`)
}
cars.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Cars.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
    return this.maxSpeed;
}
cars.increaseMaxSpeed(100);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Cars.prototype.changeYear = function (newValue) {
    this.year = newValue;
    return this.year;
}
cars.changeYear(2015);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Cars.prototype.addDriver = function (driver) {
    this.driver = driver;
    return car;
}
cars.addDriver({name: 'Daryna', age: 22});
console.log(cars);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let cinderellas = [];
cinderellas.push(new Cinderella('Lindsay', 25, 35));
cinderellas.push(new Cinderella('Sanai', 43, 35.5));
cinderellas.push(new Cinderella('Abril', 34, 36));
cinderellas.push(new Cinderella('Katherine', 20, 36.5));
cinderellas.push(new Cinderella('Lucille', 23, 37));
cinderellas.push(new Cinderella('Linda', 35, 37.5));
cinderellas.push(new Cinderella('Jasmine', 18, 38));
cinderellas.push(new Cinderella('Valeria', 30, 38.5));
cinderellas.push(new Cinderella('Julia', 28, 39));
cinderellas.push(new Cinderella('Jennifer', 22, 40));

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('vasya', 25, 37);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.shoe){
        console.log(cinderella);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(cinderella => cinderella.footSize === prince.shoe));