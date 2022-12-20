let url = new URL(location.href);
let userId = url.searchParams.get('id');
let mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(response => response.json())
.then(user =>{
    let userContainer = document.createElement('div');
    userContainer.classList.add('userContainer');
    for (const userKey in user) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');
        if(typeof user[userKey] !== 'object' ){
            let p = document.createElement('p');
            p.innerText = `${userKey} : ${user[userKey]}`;
            userDiv.appendChild(p);
        }
        else{
            userDiv.innerText = `${userKey}:`
            for (const item in user[userKey]) {
                if(typeof user[userKey][item] !== 'object'){
                  let itemParagraph = document.createElement('p');
                  itemParagraph.innerText = `${item} : ${user[userKey][item]}`
                  userDiv.appendChild(itemParagraph);
                }
                else{
                    let geo = document.createElement('p');
                    geo.innerText = `${item}:`;
                    userDiv.appendChild(geo);
                    for (const geoKey in user[userKey][item]) {
                        let geoParagraph = document.createElement('p');
                        geoParagraph.innerText = `${geoKey} : ${user[userKey][item][geoKey]}`;
                        userDiv.appendChild(geoParagraph);
                    }
                }
            }
        }
        userContainer.appendChild(userDiv);
    }

    mainContainer.appendChild(userContainer);
})
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
.then(response => response.json())
.then(posts=>{
    let button = document.createElement('button');
    button.innerText = 'post of current user';
    button.classList.add('button');
    let postsDiv = document.createElement('div');
    postsDiv.style.display = 'none';
    postsDiv.classList.add('postsDiv');
    button.onclick = function () {
        if(postsDiv.style.display === 'block'){
            postsDiv.style.display = 'none';
        }
        else{
            postsDiv.style.display = 'block';
        }
    }
    let containerWithPostBoxes = document.createElement('div');
    containerWithPostBoxes.classList.add('containerWithPostBoxes');
    for (let i = 0; i < posts.length; i++) {
        let postBox = document.createElement('div');
        postBox.classList.add('postBox');
        let titleParagraph = document.createElement('p');
        titleParagraph.innerText = `Title: ${posts[i].title}`;
        let buttonPost = document.createElement('button');
        let a = document.createElement('a');
        a.innerText = 'Details about post';
        a.href = `post-details.html?postId=${posts[i].id}`;
        a.setAttribute('target', '_blank');
        a.classList.add('a');
        buttonPost.appendChild(a);
        postBox.append(titleParagraph, buttonPost);
        containerWithPostBoxes.appendChild(postBox);
        postsDiv.append(containerWithPostBoxes)
    }
    mainContainer.append(button,postsDiv);
})
document.body.appendChild(mainContainer);