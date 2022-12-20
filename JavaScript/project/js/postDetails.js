let url2 = new URL(location.href);
let postId = url2.searchParams.get('postId');
let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => response.json())
.then(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('postDiv');
        for (const postKey in post) {
            let postParagraph = document.createElement('p');
            postParagraph.classList.add('postParagraph');
            postParagraph.innerText = `${postKey}: ${post[postKey]}`;
            postDiv.appendChild(postParagraph);
    }
        container.append(postDiv);
    }
)
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then(response => response.json())
.then(comments =>{
    let commentsDiv = document.createElement('div');
    commentsDiv.classList.add('commentsDiv');
    for (const comment of comments) {
        let commentBox = document.createElement('div');
        commentBox.classList.add('commentBox');
        for (const commentKey in comment) {
            let commentKeyParagraph = document.createElement('p');
            commentKeyParagraph.innerText = `${commentKey}: ${comment[commentKey]}`
            commentBox.appendChild(commentKeyParagraph);
        }
        commentsDiv.appendChild(commentBox);
    }
    container.append(commentsDiv);
})