export interface IMenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface IMenuItemResponse {
  data: IMenuItem[];
}