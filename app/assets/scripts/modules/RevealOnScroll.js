import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll {
	constructor() {
		this.features = $('.feature');
		this.hide();
		this.createWaypoints();
		this.showObject();
	}

	hide() {
		this.features.addClass('reveal reveal--hidden');
	}

	createWaypoints() {
		this.features.each( function(el){
			let feature = this;
			new Waypoint({
				element: feature,
				handler: function() {
					$(feature).addClass('reveal--visible')
				},
				offset: '80%'
			})
		})
	}

	showObject(){
		console.dir(this.features)

		this.features.each(function(){
			console.dir(this);
		})
	}

}

export default RevealOnScroll;