import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.ham = $('.site-header__ham')
		this.nav = $('.site-header__nav')
		this.events()
	}

	events(){
		this.ham.on('click', this.toggleHam.bind(this))

	}

	toggleHam() {
		console.log(this.nav)
		this.nav.slideToggle();
	}
}


export default MobileMenu