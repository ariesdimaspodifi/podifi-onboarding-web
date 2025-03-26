export interface IMenuItem {
  id: string;
  itemId: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface IMenuItemResponse {
  data: IMenuItem[];
}