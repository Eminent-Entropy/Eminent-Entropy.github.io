class WheelButton {
	/**
	 * Initializes each button for each wheel
	 * @param {[]} wheelButtons - an empty array to be filled with button elements
	 * @param {HTMLCollection} wheels - the collection of iframe wheels
	 */
	static init(wheelButtons, wheels) {
		let isFirst = true; //only the first wheel should be visible on load 
		for (let wheel of wheels) {
			let button = document.getElementById(`${wheel.id}-button`);
			wheelButtons.push(new WheelButton(button, wheel, !isFirst));
			isFirst = false;
		}
	}
	
	/**
	 * Object Constructor
	 * @param {button} button
	 * @param {iframe} wheel - the wheel assigned to this button
	 * @param {boolean} hide - specifies if the wheel should be hidden on load
	 */
	constructor(button, wheel, hide) {
		//sets up class variables
		this.button = button;
		this.wheel = wheel;
		this.hide = hide;
		this.defaultText = this.button.textContent;
		
		//sets up event listeners
		this.button.addEventListener('click', () => this.toggleWheel());
		this.wheel.addEventListener('load', () => wheel.hidden = this.hide);
		this.wheel.addEventListener('load', () => this.wheelLoad());
		window.addEventListener('resize', () => this.changeSize());
		
		//ensures the wheel is the correct size and reloads the wheel
		this.changeSize();
	}
	
	/**
	 * Toggels whether the assigned wheel is hidden or not
	 */
	toggleWheel() {
		if (this.wheel.hidden) {
			this.wheel.hidden = false;
			this.hide = false;
			this.button.style.fontWeight = 'bold';
			this.resetWheel()
		}
		else {
			this.wheel.hidden = true;
			this.hide = true;
			this.button.style.fontWeight = '';
		}
	}
	
	/**
	 * Reloads assigned wheel
	 */
	resetWheel() {
		//lets the user know the wheel is loading
		if (!this.hide)
			this.button.textContent = 'Loading...'
		
		this.wheel.src = this.wheel.src;
	}
	
	/**
	 * Lets the user know when the wheel is ready
	 */
	wheelLoad() {
		if (!this.hide) {
			this.button.textContent = this.defaultText;
			this.button.style.fontWeight = 'bold';
		}
	}
	
	/**
	 * Adjusts the size of the wheel for smaller window sizes
	 */
	changeSize() {
		let width = window.innerWidth;
		let newSize = 500;
		let change = false;
		
		//change does not need to happen after inital run if window size is and was more the the breakpoint
		if (width <= 768) {
			newSize = 0.636 * width;
			change = true;
		}
		else if (this.previousWidth <= 768)
			change = true;
		
		//only applies changes if the size difference is more than 5px or method has not been previously run
		if ( (change && Math.abs(this.previousSize - newSize) > 5) || (!this.previousSize) ) {
			this.wheel.style.width = newSize + 'px';
			this.wheel.style.height = newSize + 'px';
			
			//ensures the window is done resizing before reload
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(() => this.resetWheel(), 500);
		}
		
		this.previousWidth = width;
		this.previousSize = newSize;
	}
}

let wheelButtons = [];
let resetButton;
document.addEventListener('DOMContentLoaded', () => {
	let wheels = document.getElementById('spin-wheels').children;
	WheelButton.init(wheelButtons, wheels);
	resetButton = new ResetButton(document.getElementById('wheel-reset-button'), wheelButtons);
});