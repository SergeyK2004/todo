import { IToDoData } from '../types';
import { IForm, IFormConstructor } from './Form';
import { IViewItem, IViewItemConstructor } from './Item';
import { IPage } from './Page';
import { IPopup } from './Popup';

export class ItemPresenter {
	protected itemTemplate: HTMLTemplateElement;
	protected formTemplate: HTMLTemplateElement;
	protected todoForm: IForm;
	protected todoEditForm: IForm;

	constructor(
		protected model: IToDoData,
		protected formConstructor: IFormConstructor,
		protected viewPageContainer: IPage,
		protected viewItemConstructor: IViewItemConstructor,
		protected modal: IPopup,
	) {
		this.itemTemplate = document.querySelector(
			'#todo-item-template'
		) as HTMLTemplateElement;
		this.formTemplate = document.querySelector(
			'#todo-form-template'
		) as HTMLTemplateElement;
	}

	init() {
		this.todoForm = new this.formConstructor(this.formTemplate)
		this.todoForm.setHandler(this.handleSubmitForm.bind(this));
		this.viewPageContainer.formContainer = this.todoForm.render();
		this.todoEditForm = new this.formConstructor(this.formTemplate);
	}

	handleSubmitForm(data: string) {
		this.model.addItem(data);
		this.renderView();
		this.todoForm.clearValue();
	}

	handleSubmitEditForm(data: string, id: string) {
		this.model.editItem(id, data);
		this.renderView();
		this.todoEditForm.clearValue();
		this.modal.close();
	}

	handleDeleteItem(item: IViewItem) {
		this.model.removeItem(item.id);
		this.renderView();
	}

	handleCopyItem(item: IViewItem) {
		const copyedItem = this.model.getItem(item.id)
		this.model.addItem(copyedItem.name);
		this.renderView();
	}

	handleEditItem(item: IViewItem) {
		const editedItem = this.model.getItem(item.id)
		this.todoEditForm.setValue(editedItem.name);
		this.todoEditForm.buttonText = 'Записать';
		this.todoEditForm.placeholder = 'Новое название';
		this.modal.content = this.todoEditForm.render();
		this.todoEditForm.setHandler((data: string) => this.handleSubmitEditForm(data, item.id))
		this.modal.open();
	}

	renderView() {
		const itemList = this.model.items.map((item) => {
			const todoItem = new this.viewItemConstructor(this.itemTemplate);
			todoItem.setDeleteHandler(this.handleDeleteItem.bind(this))
			todoItem.setCopyHandler(this.handleCopyItem.bind(this))
			todoItem.setEditHandler(this.handleEditItem.bind(this))
			const itemElement = todoItem.render(item);
            return itemElement;
		}).reverse();

		this.viewPageContainer.todoContainer = itemList;
	}
}
