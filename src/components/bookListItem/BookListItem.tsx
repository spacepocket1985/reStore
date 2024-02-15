import { Link } from 'react-router-dom';
import { BookType } from '../../types/types';
import './BookListItem.css';

type BookListItemPropsType = {
  book: BookType;
  onAddToCart: () => void;
};

export const BookListItem = (props: BookListItemPropsType) => {
  const {
    book: { title, author, price, coverImage, titleShort },
    onAddToCart,
  } = props;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <Link to={`/book/${titleShort}`} className="book-title">
          {title}
        </Link>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button onClick={onAddToCart} className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};
