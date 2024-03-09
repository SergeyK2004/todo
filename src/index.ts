import { Form } from "./components/Form"
import { Item } from "./components/Item"
import { ItemsContainer } from "./components/ItemContainer"
import { ItemPresenter } from "./components/ItemPresenter"
import { Page } from "./components/Page"
import { Popup } from "./components/Popup"
import { ToDoData } from "./components/ToDoData"
import "./styles/styles.css"
import { todos } from "./utils/constants"

// const contentElement = document.querySelector('.todos__list') as HTMLElement;
const contentElement = document.querySelector('.content') as HTMLElement;

const popupElement = document.querySelector('.popup') as HTMLElement;

const itemContainer = new Page(contentElement)

const todoArray = new ToDoData();
todoArray.items = todos;

const modal = new Popup(popupElement)

const itemPresenter = new ItemPresenter(todoArray, Form, itemContainer, Item, modal);

itemPresenter.init();
itemPresenter.renderView();
