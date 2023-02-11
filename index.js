import { Todo } from "./modules/Todo.js";

const itemsContainer = document.querySelector('.items');
const addItemContainer = document.querySelector('.add-item_container');
const mainContainer = document.querySelector('.container');
const footer = document.querySelector('.footer');

const todo = new Todo(itemsContainer, addItemContainer, mainContainer, footer);

todo.initApp();
