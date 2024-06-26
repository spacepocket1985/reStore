import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import {
  booksRequestedAC,
  booksLoadedAC,
  booksErrorAC,
  addBookToCartAC,
} from '../../store/actions/actions';
import { AppRootState } from '../../store/store';
import { BookListItem } from '../bookListItem/BookListItem';
import { bookStoreService } from '../../services/bookStoreService';
import { BookType } from '../../types/types';

import './BookList.css';
import { Spinner } from '../spinner/Spinner';
import { ErrorIndicator } from '../errorIndicator/ErrorIndicator';

type MapStateToPropsType = {
  books: Array<BookType>;
  loading: boolean;
  error: null | string;
};

type MapDispatchToPropsType = {
  fetchBooks: () => void;
  onAddToCart: (book: BookType) => void;
};

type BookListPropsType = MapStateToPropsType & MapDispatchToPropsType;

const BookList = (props: BookListPropsType) => {
  const { books, loading, error, fetchBooks, onAddToCart } = props;

  useEffect(() => {
    fetchBooks();
  }, []);

  const renderBooks = (books: BookType[]) => {
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddToCart={() => {
                  onAddToCart(book);
                }}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const spinner = loading ? <Spinner /> : null;
  const isError = error ? <ErrorIndicator errorMsg={error} /> : null;
  const content = !(loading || isError) ? renderBooks(books) : null;

  return (
    <>
      {spinner}
      {isError}
      {content}
    </>
  );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    books: state.booksList.books,
    loading: state.booksList.loading,
    error: state.booksList.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  const { getBooks } = bookStoreService();

  return {
    fetchBooks: () => {
      dispatch(booksRequestedAC());
      getBooks()
        .then((data) => {
          dispatch(booksLoadedAC(data));
        })
        .catch((error) => {
          dispatch(booksErrorAC(error));
        });
    },
    onAddToCart: (book: BookType) => {
      dispatch(addBookToCartAC(book));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
