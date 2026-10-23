export interface productType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  onAddProduct: (product: productType, quantity: number) => void;
}

export interface cartItemType {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  onIncreaseQuantity: (args: any) => void;
  onDecreaseQuantity: (args: any) => void;
  onDeleteItem: (args: any) => void;
}
