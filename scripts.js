sidebarHide = function() {
	let root = document.querySelector(':root');
	let rootStyle = getComputedStyle(root);
	let sidebarExpand = rootStyle.getPropertyValue('--side-bar-width-expand');
	let sidebarHide = rootStyle.getPropertyValue('--side-bar-width-hide');
	
	if (rootStyle.getPropertyValue('--side-bar-width') != sidebarExpand) {
		root.style.setProperty('--side-bar-width', sidebarExpand)
	}
	else {
		root.style.setProperty('--side-bar-width', sidebarHide)
	}
	
	
};