import "./styles/styles.css"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list')

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement


todos.forEach(item => {
  const itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
  const title = itemElement.querySelector('.todo-item__text')
  title.textContent = item;
  contentElement.prepend(itemElement);
})