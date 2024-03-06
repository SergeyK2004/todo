import { Form } from "./components/Form"
import { Item } from "./components/Item"
import { ToDoData } from "./components/ToDoData"
import "./styles/styles.css"
import { IItem } from "./types"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list')

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formElement = document.querySelector('.todos__form') as HTMLFormElement;

const todoForm = new Form(formElement, handleSubmitForm)

function handleSubmitForm(data: IItem) {
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

const todoArray = new ToDoData();
todoArray.items = todos;
console.log(todoArray.items)
console.log(todoArray.addItem('Создать класс с данными'))
console.log(todoArray.items)
todoArray.removeItem('2')
console.log(todoArray.items)
