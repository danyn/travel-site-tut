const $ = require('jquery')
const Person = require('./modules/Person')

var john = new Person('John', 'green');
john.greet();
console.log(Person)
var Tina = new Person("Tina", "bergundy")
Tina.greet()

$('h1').remove();