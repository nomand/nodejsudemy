
var square = (x) => x*x;

var user = {
    name: 'Andrew',
    sayHi: () => { console.log(`Hi. I'm ${user.name}`) },
    sayHiAlt() { console.log(`Hi. I'm ${this.name}`) },
    showArgs() { console.log(arguments); };
}

user.sayHi(1, 2, 3);