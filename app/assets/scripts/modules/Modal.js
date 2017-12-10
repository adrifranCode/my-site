import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Modal {
	constructor(){
		this.lazyImages = $(".lazyload");
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
		this.refreshWaypoints();
	}
	
	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}
	events(){
		this.openModalButton.click(this.openModal.bind(this));
	
		this.closeModalButton.click(this.closeModal.bind(this));
	}
	openModal(){
		this.modal.addClass("modal--is-visible");
		return false;
	}
	
	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;
