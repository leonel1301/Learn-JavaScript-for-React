const user = {
    name: 'Julián',
    age: 26,
};

function printUser(user) {
    return '<h1>Hola '+ user['age'] +'</h1>'
}

function printInfo({name}) {
    return '<h1>Hola '+ name +'</h1>'
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);  