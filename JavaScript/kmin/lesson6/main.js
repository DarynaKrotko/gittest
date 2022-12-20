// 1) Створити масив з 20 чисел та:
let numbers = [23,300,1,78,9,0,66, 43, 678, 11, 91, 123,33,9845, 30, 90, 100,55, -25, 2.45];

// a) відсортувати його від меншого до більшого.
// console.log(numbers.sort(function (a,b) {
//     return a - b;
// }))
// b) відсортувати його від більшого до меншого.
// console.log(numbers.sort(function (a,b) {
//     return b -a;
// }))
// c) Відфілтрувати числа які є кратними 3.
// console.log(numbers.filter(num => num % 3 === 0));
// d) Відфілтрувати числа які є більшими за 10.
// console.log(numbers.filter(num => num > 10));
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numbers.forEach(num => document.write(` ${num}`));
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// console.log(numbers.map(num => num *3));
//     g) Порахувати загальну суму всіх елементів у масиві (reduce)
// let initialValue = 0;
// let sum = numbers.reduce(
// (accumulator,currentValue) => accumulator +currentValue, initialValue);
// console.log(sum);


// 2) Створити масив з 20 стрічок та:
let str =['saving', 'effective', 'such','mate', 'engage', 'blow', 'data', 'swimming', 'unimportant', 'unhappiness',
    'adult', 'ours', 'rest', 'unkind', 'task', 'twist', 'baby', 'mineral', 'hunt', 'summer'];
// a) Відсортувати його в алфавітному порядку
// console.log(str.sort());
// b) Відсортувати в зворотньому порядку
// console.log(str.reverse());
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// console.log(str.filter(word => word.length > 4));
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let samSays = str.map((word) => ('Sam says ' + word));
// console.log(samSays);


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort(function (a,b) {
//     return a.age -b.age;
// }));
// console.log(users.sort(function (a,b) {
//     return b.age -a.age;
// }));

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort(function (a,b) {
//     return a.name.length -b.name.length;
// }));
// console.log(users.sort(function (a,b) {
//     return b.name.length -a.name.length;
// }));

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let idCreate = users.map((user,index) => ({id: index +1, name: user.name, age: user.age, isMarried: user.isMarried}));
// console.log(idCreate);
// // d) відсортувати його за ідентифікатором
// console.log(idCreate.sort(function (a,b) {
//     return a.id -b.id;
// }));
// e) Всі хто одружений мають попасти у новий масив та отримати квартиру (reduce)
// (accumulator,currentValue) => accumulator +currentValue, initialValue);
// console.log(sum);
// let apartment = {square: 100};
// let result = users.filter(user => user.isMarried === true).reduce(function (arr,user) {
//     user.flat = apartment;
//     arr.push(user);
//     return arr;
// }, []);
// console.log(result);


