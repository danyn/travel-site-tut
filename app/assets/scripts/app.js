function Person(name, favColor) {
	this.favoriteColor = favColor;
	this.name = name;
	this.greet = function() {
		console.log(`This is ${this.name} and my favorite color is ${this.favoriteColor}`);
	}
}

var john = new Person('John', 'green');
john.greet();
