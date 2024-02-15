export type BookType = {
  id: string;
  title: string;
  titleShort: string;
  author: string;
  description?: string;
  coverImage?: string | undefined;
  price: number;
};

export type CartItemType = {
  id: string;
  title: string;
  count: number;
  totalPrice: number;
};
