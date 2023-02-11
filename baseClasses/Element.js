export class Element {
    #element;
    
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }

    generateElement() {
        const content = document.createTextNode(this.content);

        this.#element = document.createElement(this.type);
        this.#element.appendChild(content);

        return this.#element;
    }

    setAttribute(type, value) {
        if (this.#element) {
            this.#element.setAttribute(type, value);
        } else {
            throw new Error('First you need to generate element to set attribute');
        }
    }

    setPlaceholder(value) {
        if (this.#element && this.type === 'input') {
            this.#element.placeholder = value;
        } else {
            throw new Error('First you need to generate input element to set placeholder');
        }
    }
}