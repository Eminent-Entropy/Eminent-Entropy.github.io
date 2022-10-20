sidebarToggle = function() {
	let root = document.querySelector(':root');
	let rootStyle = getComputedStyle(root);
	let sidebarShow = rootStyle.getPropertyValue('--sidebar-width-show');
	let sidebarHide = rootStyle.getPropertyValue('--sidebar-width-hide');
	
	if (rootStyle.getPropertyValue('--sidebar-width') != sidebarShow) {
		root.style.setProperty('--sidebar-width', sidebarShow)
	}
	else {
		root.style.setProperty('--sidebar-width', sidebarHide)
	}
};



let resizeTimer;
	window.addEventListener("resize", () => {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
	}, 100);
});

document.addEventListener("DOMContentLoaded", function() {
	document.body.classList.remove("resize-animation-stopper");
});