/**
 * Stops animations and transitions during window resizing
 */
 class ResizeAnimationStopper {
	constructor(duration) {
		this.duration = duration;
		window.addEventListener("resize", () => this.stopAnimations());
	}

	stopAnimations() {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(this.resizeTimer);
		this.resizeTimer = setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
		}, this.duration);
	}
}
resizeAnimationStopper = new ResizeAnimationStopper(100);