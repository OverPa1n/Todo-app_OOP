import { Element } from "../baseClasses/Element.js";

export class ClearButton extends Element {
    constructor(type, content = '') {
        super(type, content)
    }

    generateClearButton() {
        const button = this.generateElement();

        this.setAttribute('class', 'clear_icon');
    
        return button;
    }
}