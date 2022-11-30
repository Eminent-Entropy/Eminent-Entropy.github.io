class ResetButton {
    constructor(button, wheelButtons) {
        this.button = button;
        this.wheelButtons = wheelButtons;

        this.button.addEventListener('click', () => this.resetWheels());
    }

    resetWheels() {
        for (let wheelButton of this.wheelButtons)
            wheelButton.resetWheel();
    }
}