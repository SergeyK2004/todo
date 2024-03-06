import { Form } from "./components/Form"
import { Item } from "./components/Item"
import "./styles/styles.css"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list')

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formElement = document.querySelector('.todos__form') as HTMLFormElement;

const todoForm = new Form(formElement, handleSubmitForm)

function handleSubmitForm(data: string) {
  const todoItem = new Item(template);
  const itemElement = todoItem.render(data)
  contentElement.prepend(itemElement);
  todoForm.clearValue();

}

todos.forEach(item => {
  const todoItem = new Item(template);
  const itemElement = todoItem.render(item)
  contentElement.prepend(itemElement);
})

