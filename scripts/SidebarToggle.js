/**
 * Toggles whether the side bar (on mobile) is shown or hidden on button press
 */
class SidebarToggle {
	constructor(button) {
		this.root = document.querySelector(':root');
		this.sidebarWidth = '--sidebar-width';
		this.sidebarShow = '--sidebar-width-show';
		this.sidebarHide = '--sidebar-width-hide';
		
		this.root.style.setProperty(this.sidebarWidth, `var(${this.sidebarHide})`);
		button.addEventListener("click", () => this.toggleSidebar());
	}
	
	toggleSidebar() {
		this.updateStyle();
		
		if (this.sidebarWidthValue == this.sidebarShowValue) {
			this.root.style.setProperty(this.sidebarWidth, `var(${this.sidebarHide})`);
		}
		else {
			this.root.style.setProperty(this.sidebarWidth, `var(${this.sidebarShow})`);
		}
	}
	
	//retrieves what the values are in the current configuration 
	updateStyle() {
		this.rootStyle = getComputedStyle(this.root);
		this.sidebarWidthValue = this.rootStyle.getPropertyValue(this.sidebarWidth);
		this.sidebarShowValue = this.rootStyle.getPropertyValue(this.sidebarShow);
	}
}
sidebarToggle = new SidebarToggle(document.getElementById("side-bar-toggle"));