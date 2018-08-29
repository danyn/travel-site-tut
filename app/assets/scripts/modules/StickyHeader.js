
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';



class StickyHeader {
	constructor() {
		this.header = $('.site-header');
		// this.logo = $('.site-header__logo');
		this.trigger = $('.large-hero__title');

		this.headerWaypoint();
	}

	headerWaypoint() {
		const Clss = this 
		
		new Waypoint({
			element: this.trigger[0],
			handler: function(d) {
				if(d==="down"){
					Clss.header.addClass('site-header--scrolled')
					// Clss.logo.addClass('site-header__logo--scrolled')
				}else{
					Clss.header.removeClass('site-header--scrolled')
					// Clss.logo.removeClass('site-header__logo--scrolled')
				}
			}
		})

	}



}

export default StickyHeader;