import "./styles/styles.css"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list')

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement

function createItem(name: string) {
    const itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
    const title = itemElement.querySelector('.todo-item__text')
    title.textContent = name;
    return itemElement;

}

todos.forEach(item => {
  const itemElement = createItem(item)
  contentElement.prepend(itemElement);
})