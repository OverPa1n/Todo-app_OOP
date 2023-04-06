import {TodoFunctionality} from "./todo-functionality.js";

export class Todo extends TodoFunctionality {
    constructor(itemsContainer, addItemContainer, footer) {
        super(itemsContainer, addItemContainer, footer)
    }

    initApp() {
        this.renderElements();
        this.constructAddItemFunctionality();
        this.constructClearAllFunctionality();
        this.constructTaskCounterFunctionality();
    }
}
