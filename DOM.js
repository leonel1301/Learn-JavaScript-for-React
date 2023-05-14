const title = document.createElement('h1');
title.innerText = 'Hello, DOM!';

const button = document.createElement('button')
button.innerText = 'Click me!';

button.addEventListener('click', () => {
    title.innerText = 'Actualizado!';
    alert('Actualizado!');

});

console.log(title); // <h1></h1>
document.body.append(title);
document.body.append(button);