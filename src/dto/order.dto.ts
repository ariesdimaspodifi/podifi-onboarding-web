import { IMenuItem } from "./menuItem.dto";

export interface IOrder {
  id: string;
  menuItems: IMenuItem[];
  totalPrice: number;
}
