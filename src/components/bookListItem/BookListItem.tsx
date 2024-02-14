import { BookType } from '../../types/types';
import './BookListItem.css';

type BookListItemPropsType = {
  book: BookType;
  onAddToCart: () => void;
};

export const BookListItem = (props: BookListItemPropsType) => {
  const { title, author, price, coverImage } = props.book;
  const { onAddToCart } = props;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button onClick={onAddToCart} className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};
