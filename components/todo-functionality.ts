import {HtmlElementFactory} from "../factories/html-element-factory.js";
import {NODE_TYPES} from "../enums/node-types.enum.js";

export class TodoFunctionality {
    private readonly itemsContainer;
    private readonly addItemContainer;
    private readonly footer;

    constructor(itemsContainer, addItemContainer, footer) {
        this.itemsContainer = itemsContainer;
        this.addItemContainer = addItemContainer;
        this.footer = footer;
    }

    private attachAddInput() {
        const params = {type: NODE_TYPES.INPUT, content: '', attributes: {type: 'class', value: 'add_input', placeholder: 'Type your todo'}};
        const input = HtmlElementFactory.getElement(params);

        this.addItemContainer.append(input);
    }

    private attachAddButton() {
        const params = {type: NODE_TYPES.BUTTON, content: 'Add item', attributes: {type: 'class', value: 'add_button'}};
        const button = HtmlElementFactory.getElement(params);

        this.addItemContainer.append(button);
    }

    private attachClearAllButton() {
        const params = {type: NODE_TYPES.BUTTON, content: 'Clear all', attributes: {type: 'class', value: 'clear-all_button'}};
        const button = HtmlElementFactory.getElement(params);

        this.footer.append(button);
    }

    private addClearButton(todoItemContainer) {
        const params = {type: NODE_TYPES.BUTTON, content: 'Clear all', attributes: {type: 'class', value: 'clear_icon'}};
        const button = HtmlElementFactory.getElement(params);

        todoItemContainer.appendChild(button);

        button.addEventListener('click', () => {
            todoItemContainer.remove();
        });
    }

    constructAddItemFunctionality() {
        const itemsContainer = this.itemsContainer;
        const addInput: any = document.querySelector('.add_input');
        const addButton: any = document.querySelector('.add_button');

        addButton.addEventListener('click', () => {
            const value = addInput.value;
            const params = {type: NODE_TYPES.DIV, content: '', attributes: {type: 'class', value: 'item_container'}};
            const todoItemContainer = HtmlElementFactory.getElement(params);

            if (value) {
                const params = {type: NODE_TYPES.DIV, content: value, attributes: {type: 'class', value: 'item'}};
                const todoItem = HtmlElementFactory.getElement(params);

                todoItemContainer.appendChild(todoItem);
                this.addClearButton(todoItemContainer);
                itemsContainer.appendChild(todoItemContainer);
                addInput.value = '';
            }
        })
    }

    constructClearAllFunctionality() {
        const clearAllButton = document.querySelector('.clear-all_button');

        clearAllButton.addEventListener('click', () => {
            const itemsToDelete = Array.from(document.getElementsByClassName('item_container'));

            itemsToDelete.forEach(item => item.remove());
        })
    }

    constructTaskCounterFunctionality() {
        const params = {type: NODE_TYPES.SPAN, content: 'Task counter: 0', attributes: {type: 'class', value: 'task_counter'}};
        const taskCounterSpan = HtmlElementFactory.getElement(params);

        this.itemsContainer.addEventListener('DOMSubtreeModified', ({target}) => {
            const taskCount = target.children.length;

            taskCounterSpan.innerHTML = `Task counter: ${taskCount}`;
        })

        this.footer.append(taskCounterSpan);
    }

    renderElements() {
        this.attachAddButton();
        this.attachAddInput();
        this.attachClearAllButton();
    }
}
