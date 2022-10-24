/**
 * Toggles whether the side bar (on mobile) is shown or hidden on button press
 */
document.getElementById("side-bar-toggle").addEventListener("click", () => {
	let root = document.querySelector(':root');
	let rootStyle = getComputedStyle(root);
	let sidebarShow = rootStyle.getPropertyValue('--sidebar-width-show');
	
	//the values of 'var(--sidebar-width-show)' and 'var(--sidebar-width-hide)' can be different depending on window size
	if (rootStyle.getPropertyValue('--sidebar-width') != sidebarShow) {
		root.style.setProperty('--sidebar-width', 'var(--sidebar-width-show)');
	}
	else {
		root.style.setProperty('--sidebar-width', 'var(--sidebar-width-hide)');
	}
});


/**
 * Stops animations and transitions during window resizing
 */
let resizeTimer;
window.addEventListener("resize", () => {
	document.body.classList.add("resize-animation-stopper");
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(() => {
		document.body.classList.remove("resize-animation-stopper");
	}, 100);
});
