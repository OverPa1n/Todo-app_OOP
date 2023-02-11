import { Element } from "../baseClasses/Element.js";

export class ClearAllButton extends Element {
    constructor(type, content = '') {
        super(type, content);
    }

    generateClearAllButton() {
        const button = this.generateElement();
        
        this.setAttribute('class', 'clear-all_button');

        return button;
    }
}