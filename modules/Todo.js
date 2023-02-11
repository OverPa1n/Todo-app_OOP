import { TodoFunctionality } from "../baseClasses/TodoFunctionality.js";

export class Todo extends TodoFunctionality {
    constructor(itemsContainer, addItemContainer, mainContainer, footer) {
        super(itemsContainer, addItemContainer, mainContainer, footer)
    }

    initApp() {
        this.renderElements();
        this.constructAddItemFunctionality();
        this.constructClearAllFunctionality();
        this.constructTaskCounterFunctionality();
    }
}