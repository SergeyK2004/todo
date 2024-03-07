import { IToDoData } from '../types';
import { IForm } from './Form';
import { IViewItemConstructor } from './Item';
import { IItemsContainer } from './ItemContainer';

export class ItemPresenter {
	template: HTMLTemplateElement;

	constructor(
		protected model: IToDoData,
		protected viewForm: IForm,
		protected viewItemsContainer: IItemsContainer,
		protected viewItemConstructor: IViewItemConstructor
	) {
		viewForm.setHandler(this.handleSubmitForm.bind(this));
		this.template = document.querySelector(
			'#todo-item-template'
		) as HTMLTemplateElement;
        this.renderView();
	}

	handleSubmitForm(data: string) {
		this.model.addItem(data);
		this.renderView();
		this.viewForm.clearValue();
	}

	renderView() {
		const itemList = this.model.items.reverse().map((item) => {
			const todoItem = new this.viewItemConstructor(this.template);
			const itemElement = todoItem.render(item);
            return itemElement;
		});

		this.viewItemsContainer.container = itemList;
	}
}
