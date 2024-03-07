export interface IItemsContainer {
    container: HTMLElement[];
}

export class ItemsContainer {
        private _container: HTMLElement;
    
        constructor(container: HTMLElement) {
            this._container = container;
        }
    
        set container(items: HTMLElement[]) {
            this._container.replaceChildren(...items);
        }
}