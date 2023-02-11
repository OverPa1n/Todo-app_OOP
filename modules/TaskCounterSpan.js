import { Element } from "../baseClasses/Element.js"

export class TaskCounterSpan extends Element {
    constructor(type, content = '') {
        super(type, content)
    }

    generateTaskCounterSpan() {
        const span = this.generateElement();
        
        this.setAttribute('class', 'task_counter');

        return span;
    }
}