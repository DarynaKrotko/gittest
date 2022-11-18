// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a,b,c) =>{
//     if(a<b && a<c){
//         console.log(a);
//         return a;
//     }
//     else if(b<a && b<c){
//         console.log(b);
//         return b;
//     }
//     else{
//         console.log(c);
//         return c;
//     }
// }
// minNumber(4,3,-1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a,b,c) =>{
//     if(a>b && a>c){
//         console.log(a);
//         return a;
//     }
//     else if(b>a && b>c){
//         console.log(b);
//         return b;
//     }
//     else{
//         console.log(c);
//         return c;
//     }
// }
// maxNumber(2,33,4)
// - створити функцію яка повертає найбільше число з масиву
// let maxNumber = (...arr) =>{
//     let x = arr[0];
//     for (const item of arr) {
//         if(item> x){
//             x=item;
//     }
//     }
//     console.log(x);
//     return x;
// }
// maxNumber(3,22,44,33,0);
// - створити функцію яка повертає найменьше число з масиву
// let minNumber = (...arr) =>{
//     let x = arr[0];
//     for (const item of arr) {
//         if(item<x){
//             x=item;
//         }
//     }
//     console.log(x);
//     return x;
// }
// minNumber(-1,4,5,6,-2);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumNumber = (...arr) =>{
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//     }
//     console.log(sum);
//     return sum;
// }
// sumNumber(1,2,10);
// - Дано натуральное число n. Выведите все числа от 1 до n.
// let counter = (n) =>{
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// counter(4);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let counter = (A,B) =>{
//     if(A<B){
//         for (let i = A; i <= B; i++) {
//             console.log(i);
//         }
//     }
//     else if(A>B){
//         for (let i = A; i >= B; i--) {
//             console.log(i);
//         }
//     }
// }
// counter(10,2);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo= [9,8,0,4];//0) ==> [ 8, 9, 0, 4 ]
function swap(I,...arr) {
    for (let i = 0; i < arr.length; i++) {
        if(i===I){

        }
    }
    console.log(foo);
}
swap(0,foo);
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]