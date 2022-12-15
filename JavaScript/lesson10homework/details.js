let url = new URL(location.href);
let id = url.searchParams.get('id');
console.log(id);
fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
.then(response => response.json())
.then(user => {
    for (const key in user) {
        if(typeof user[key] === 'object'){
        for (const smallKey in user[key]) {
            if(typeof user[key][smallKey] === 'object'){
                for (const geo in user[key][smallKey]) {
                    let divchik = document.createElement('div');
                    divchik.innerHTML = `${geo}: ${user[key][smallKey][geo]}`
                    document.body.appendChild(divchik);
                }
            }
            else{
                let div1 = document.createElement('div');
                div1.innerHTML =
                    `${smallKey}: ${user[key][smallKey]}`
                document.body.appendChild(div1);
            }

        }

    }
        else{
            let div2 = document.createElement('div');
            div2.innerHTML = `${key}: ${user[key]} `;
            document.body.appendChild(div2);

        }
    }
})
// let div = document.createElement('div');
// for (const userKey of user) {
//     if(typeof userKey === 'object'){
//         let ul = document.createElement('ul');
//         for (const userKeyElement of userKey) {
//             let li = document.createElement('li');
//             li.innerText = `${userKeyElement} `;
//             ul.appendChild(li);
//         }
//         div.append(ul);
//     }
// }
// document.body.appendChild(div);
