// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arrOfClasses = [];
function findClasses(element) {
    let children = element.children;
    if(children.length !== 0){
        // arrOfClasses.push(element.classList)
        if(element.classList !== 0){
            let classes = element.classList;
            for (const class1 of classes) {
                arrOfClasses.push(class1);
            }
        }
        for (const child of children) {
            findClasses(child);
        }
    }
}
findClasses(document.body);
console.log(arrOfClasses);