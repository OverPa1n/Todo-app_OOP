import { AddItemButton } from "../modules/AddItemButton.js";
import { AddItemInput } from "../modules/AddItemInput.js";
import { ClearAllButton } from "../modules/ClearAllButton.js";
import { ClearButton } from "../modules/ClearButton.js";
import { TaskCounterSpan } from "../modules/TaskCounterSpan.js";
import { TodoItem } from "../modules/TodoItem.js";

export class Elements {
    get clearButton() {
        const clearButton = new ClearButton('button', 'x');

        return clearButton.generateClearButton();
    }

    get addItemButton() {
        const addItemButton = new AddItemButton('button', 'Add item');

        return addItemButton.generateAddItemButton();
    }

    get addItemInput() {
        const addItemInput = new AddItemInput('input');

        return addItemInput.generateAddItemInput();
    }

    get clearAllButton() {
        const clearAllButton = new ClearAllButton('button', 'Clear all');

        return clearAllButton.generateClearAllButton();
    }

    get taskCounterSpan() {
        const span = new TaskCounterSpan('span', 'Task counter: 0');

        return span.generateTaskCounterSpan();
    }

    get todoItemContainer() {
        const container = new TodoItem('div');

        return container.generateTodoItemContainer();
    }

    getTodoItem(content) {
        const todoItem = new TodoItem('div', content);

        return todoItem.generateTodoItem();
    }
}