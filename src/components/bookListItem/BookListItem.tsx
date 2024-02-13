import { BookType } from '../types/types';
import './BookListItem.css';

type BookListItemPropsType = {
  book: BookType;
};

export const BookListItem = (props: BookListItemPropsType) => {
  const { book } = props;
  return (
    <>
      <span>{book.author}</span>- <span>{book.title}</span>
    </>
  );
};
