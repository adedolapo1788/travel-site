import $ from "jquery";

class Modal{
	constructor(){
		this.openModalButton =$('.open-modal');
		this.modal =$('.modal');
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		//clicking  open
		this.openModalButton.click(this.openModel.bind(this));

		//clicking close
		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes escape key
		$(document).Keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e){
		if(e.keyCode==27){
			this.closeModal();
		}
	}

	openModel(){
		this.modal.addClass("modal--is-visible");
		//prevent default scrolling up
		return false;
	}
	closeModal(){
		this.modal.removeClass("modal--is-visible");

	}
}


export default Modal; 