import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.ham = $('.site-header__ham')
		this.nav = $('.site-header__nav')
		this.header = $('.site-header')
		this.contact = $('.site-header__contact')
		this.events()
	}

	events(){
		this.ham.on('click', this.toggleHam.bind(this))
	}

	toggleHam() {
		console.log(this.nav)

		this.nav.toggleClass('site-header__nav--mobile')
		this.header.toggleClass('site-header--mobile')
		this.contact.toggleClass('site-header__contact--mobile')
	}
}


export default MobileMenu