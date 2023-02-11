import { Element } from "../baseClasses/Element.js";

export class AddItemButton extends Element {
    constructor(type, content = '') {
        super(type, content);
    }

    generateAddItemButton() {
        const button = this.generateElement();

        this.setAttribute('class', 'add_button');

        return button;
    }
}