export function createItem(template: HTMLTemplateElement, name: string) {
    const templateContent = template.content.querySelector('.todo-item') as HTMLElement
    const itemElement = templateContent.cloneNode(true) as HTMLElement;
    const title = itemElement.querySelector('.todo-item__text')!
    title.textContent = name;
    return itemElement;

}