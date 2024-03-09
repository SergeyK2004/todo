import { Form } from "./components/Form"
import { Item } from "./components/Item"
import { ItemsContainer } from "./components/ItemContainer"
import { ItemPresenter } from "./components/ItemPresenter"
import { ToDoData } from "./components/ToDoData"
import "./styles/styles.css"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list') as HTMLElement;
const formElement = document.querySelector('.todos__form') as HTMLFormElement;

const todoForm = new Form(formElement)
const itemContainer = new ItemsContainer(contentElement);

const todoArray = new ToDoData();
todoArray.items = todos;

const itemPresenter = new ItemPresenter(todoArray, todoForm, itemContainer, Item);

itemPresenter.init();