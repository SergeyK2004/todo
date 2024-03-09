export interface IForm {
	buttonText: string;
	placeholder: string;
	setHandler(handleFormSubmit: Function): void;
	render(): HTMLFormElement;
	setValue(data: string): void;
	getValue(): string;
	clearValue(): void;
}

export interface IFormConstructor {
    new (formTemplate: HTMLTemplateElement): IForm;
}

export class Form {
	protected formElement: HTMLFormElement;
	protected inputField: HTMLInputElement;
	protected handleFormSubmit: Function;
	protected submitButton: HTMLButtonElement;

	constructor(formTemplate: HTMLTemplateElement) {
		this.formElement = formTemplate.content
			.querySelector('.todos__form')
			.cloneNode(true) as HTMLFormElement;
		this.inputField = this.formElement.querySelector('.todo-form__input');
		this.submitButton = this.formElement.querySelector(
			'.todo-form__submit-btn'
		);
		this.formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this.handleFormSubmit(this.inputField.value);
		});
	}

	setHandler(handleFormSubmit: Function) {
		this.handleFormSubmit = handleFormSubmit;
	}

	render() {
		return this.formElement;
	}

	setValue(data: string) {
		this.inputField.value = data;
	}

	getValue() {
		return this.inputField.value;
	}

	clearValue() {
		this.formElement.reset();
	}

	set buttonText(data: string) {
		this.submitButton.textContent = data;
	}

	set placeholder(data: string) {
		this.inputField.placeholder = data;
	}
}
