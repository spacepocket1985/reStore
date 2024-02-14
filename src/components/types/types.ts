export type BookType = {
  id: string;
  title: string;
  author: string;
  coverImage?: string | undefined;
  price: number;
};

export type CartItemType = {
  id: string;
  title: string;
  count: number;
  totalPrice: number;
};
