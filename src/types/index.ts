export interface IItem {
    id: string;
    name: string;
}

export interface IToDoData {
    items: IItem[];
    addItem: (data: string) => IItem;
    removeItem: (id: string) => void;
}