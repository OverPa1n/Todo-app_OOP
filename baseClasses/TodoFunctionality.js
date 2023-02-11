import { Elements } from "./Elements.js";

export class TodoFunctionality extends Elements {
    constructor(itemsContainer, addItemContainer, mainContainer, footer) {
        super();

        this.itemsContainer = itemsContainer;
        this.addItemContainer = addItemContainer;
        this.mainContainer = mainContainer;
        this.footer = footer;
    }

    #attachAddInput() {
        const input = this.addItemInput;

        this.addItemContainer.append(input);
    }

    #attachAddButton() {
        const button = this.addItemButton;

        this.addItemContainer.append(button);
    }

    #attachClearAllButton() {
        const button = this.clearAllButton;

        this.footer.append(button);
    }

    #addClearButton(todoItemContainer) {
        const clearButton = this.clearButton;
        todoItemContainer.appendChild(clearButton);

        clearButton.addEventListener('click', () => {
            todoItemContainer.remove();
        });
    }

    constructAddItemFunctionality() {
        const itemsContainer = this.itemsContainer;
        const addInput = document.querySelector('.add_input');
        const addButton = document.querySelector('.add_button');

        addButton.addEventListener('click', () => {
            const value = addInput.value;
            const todoItemContainer = this.todoItemContainer;

            if (value) {
                const todoItem = this.getTodoItem(value);

                todoItemContainer.appendChild(todoItem);
                this.#addClearButton(todoItemContainer);
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
        const taskCounterSpan = this.taskCounterSpan;
        
        this.itemsContainer.addEventListener('DOMSubtreeModified', ({target}) => {
            const taskCount = target.children.length;

            taskCounterSpan.innerHTML = `Task counter: ${taskCount}`;
        })

        this.footer.append(taskCounterSpan);
    }

    renderElements() {
        this.#attachAddButton();
        this.#attachAddInput();
        this.#attachClearAllButton();
    }
}