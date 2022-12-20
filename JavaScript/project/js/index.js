
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(users =>{
    let container = document.createElement('div');
    container.classList.add('container');
    for (let user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');
        let userParagraph = document.createElement('p');
        userParagraph.innerText = `${user.id} ${user.name}`;
        userParagraph.classList.add('paragraph');
        let button = document.createElement('button');
        button.classList.add('button');
        let a = document.createElement('a');
        a.href = `user-details.html?id=${user.id}`;
        a.innerText = 'Learn more';
        a.classList.add('a');
        a.setAttribute('target', '_blank');
        button.appendChild(a);
        userDiv.append(userParagraph, button);
        container.appendChild(userDiv);
    }
        document.body.appendChild(container);
    }
)