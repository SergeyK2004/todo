import { Item } from "./components/Item"
import "./styles/styles.css"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list')

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement


todos.forEach(item => {
  const todoItem = new Item(template);
  const itemElement = todoItem.render(item)
  contentElement.prepend(itemElement);
})