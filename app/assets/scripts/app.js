// const $ = require('jquery')
import $ from 'jquery'

// const Person = require('./modules/Person')
import Person from './modules/Person'

var john = new Person('logzi', 'green');
john.greet();

var Tina = new Person("Wina", "bergundy")
Tina.greet()


class Baby extends Person{
	hungry(){console.log('wawawa')}
}

var gary = new Baby("Gary", "red")

gary.greet()
gary.hungry()

$('h1').remove();
// 