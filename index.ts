import {Todo} from "./components/Todo.js";

const itemsContainer = document.querySelector('.items');
const addItemContainer = document.querySelector('.add-item_container');
const footer = document.querySelector('.footer');
const todo = new Todo(itemsContainer, addItemContainer, footer);

todo.initApp();
