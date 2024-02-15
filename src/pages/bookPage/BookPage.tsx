import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { BookListItem } from '../../components/bookListItem/BookListItem';
import { ErrorIndicator } from '../../components/errorIndicator/ErrorIndicator';
import { addBookToCartAC } from '../../store/actions/actions';
import { AppRootState } from '../../store/store';
import { BookType } from '../../types/types';
ErrorIndicator;

import './BookPage.css';

type MapStateToPropsType = {
  books: Array<BookType>;
};

type MapDispatchToPropsType = {
  onAddToCart: (book: BookType) => void;
};

type BookPagePropsType = MapStateToPropsType & MapDispatchToPropsType;

const BookPage = (props: BookPagePropsType) => {
  const { bookShortTitle } = useParams();
  const { books, onAddToCart } = props;

  const needfulBook = books.find((book) => book.titleShort === bookShortTitle);

  if (!bookShortTitle || !needfulBook)
    return <ErrorIndicator errorMsg="We dont find this book" />;

  return (
    <BookListItem
      book={needfulBook}
      onAddToCart={() => {
        onAddToCart(needfulBook);
      }}
    />
  );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    books: state.booksList.books,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onAddToCart: (book: BookType) => {
      dispatch(addBookToCartAC(book));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
