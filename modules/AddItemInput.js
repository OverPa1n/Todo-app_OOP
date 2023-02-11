import { Element } from "../baseClasses/Element.js";

export class AddItemInput extends Element {
    constructor(type, content = '') {
        super(type, content);
    }

    generateAddItemInput() {
        const input = this.generateElement();

        this.setAttribute('class', 'add_input');
        this.setPlaceholder('Type your todo');

        return input;
    }
}