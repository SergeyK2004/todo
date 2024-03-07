export interface IForm {
     setHandler(handleFormSubmit: Function): void;
     render(): HTMLFormElement;
     setValue(data: string): void;
     getValue(): string;
     clearValue(): void;
}

export class Form {
    protected formElement: HTMLFormElement;
    protected inputField: HTMLInputElement;
    protected handleFormSubmit: Function;

    constructor(formElement: HTMLFormElement) {
        this.formElement = formElement;
        this.inputField = this.formElement.querySelector('.todo-form__input')
    }

    setHandler(handleFormSubmit: Function) {
        this.handleFormSubmit = handleFormSubmit;
        this.formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this.inputField.value)
        })
    }

    render() {
        return this.formElement
    }

    setValue(data: string) {
        this.inputField.value = data;
    }

    getValue() {
        return this.inputField.value
    }

    clearValue() {
        this.formElement.reset();
    }
}