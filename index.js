function hello() {
  console.log('hello world');
  console.log('Go JS!');
  return 'React is awesome!';
}

function nameLeo() {
  return {name: 'Leo'};
}

function hello(name) {
    return 'Hello ' + name;
}

function add(a, b) {
    if (b === undefined) {
        b = 0;
    }
  return a + b;
}

//Objetos
const user = {
    name: 'Leonel',
    lastName: 'Ortega',
    age: 26,
    address: {
        street: 'San Jeronimo City',
        city: 'Lima',
        country: 'Perú',        
    },
    friends: ['Stevens', 'Lucas', 'Oliver'],
    active: true,
    sendMail: function() {
        console.log('Sending email...');
    },
    receiveMail: () => {
        console.log('Receiving email...');
    }
}

console.log(user.address.street);
console.log(user.friends[1]);
const result = hello();
console.log(result);
console.log(nameLeo());
console.log(hello('Leo'));
console.log(hello('Martino'));
console.log(add(11, 2));
console.log(add(11));
//en la linea 25 se imprime NaN porque no se le esta pasando 
//el segundo parametro a la funcion add y por lo tanto no puede sumar 
//undefined + 11 = NaN