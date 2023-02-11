import { Element } from "../baseClasses/Element.js";

export class TodoItem extends Element {
    #element;

    constructor(type, content = '') {
        super(type, content);

        this.#element = this.generateElement();
    }

    generateTodoItemContainer() {
        this.setAttribute('class', 'item_container');

        return this.#element;
    }

    generateTodoItem() {
        this.setAttribute('class', 'item');

        return this.#element;
    }
}