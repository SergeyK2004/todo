import { IToDoData } from '../types';
import { IForm } from './Form';
import { IViewItem, IViewItemConstructor } from './Item';
import { IItemsContainer } from './ItemContainer';

export class ItemPresenter {
	template: HTMLTemplateElement;

	constructor(
		protected model: IToDoData,
		protected viewForm: IForm,
		protected viewItemsContainer: IItemsContainer,
		protected viewItemConstructor: IViewItemConstructor
	) {
		this.template = document.querySelector(
			'#todo-item-template'
		) as HTMLTemplateElement;
		this.init();
        this.renderView();
	}

	init() {
		this.viewForm.setHandler(this.handleSubmitForm.bind(this));

	}

	handleSubmitForm(data: string) {
		this.model.addItem(data);
		this.renderView();
		this.viewForm.clearValue();
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

	renderView() {
		const itemList = this.model.items.map((item) => {
			const todoItem = new this.viewItemConstructor(this.template);
			todoItem.setDeleteHandler(this.handleDeleteItem.bind(this))
			todoItem.setCopyHandler(this.handleCopyItem.bind(this))
			const itemElement = todoItem.render(item);
            return itemElement;
		}).reverse();

		this.viewItemsContainer.container = itemList;
	}
}
