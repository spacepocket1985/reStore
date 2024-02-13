import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  booksRequestedAC,
  booksLoadedAC,
  booksErrorAC,
  ActionBooksErrorType,
  ActionBooksLoadedType,
  ActionBooksRequestedType,
} from '../../store/actions/actions';
import { AppRootState } from '../../store/store';
import { BookListItem } from '../bookListItem/BookListItem';
import { bookStoreService } from '../../services/bookStoreService';
import { BookType } from '../types/types';

import './BookList.css';
import { Spinner } from '../spinner/Spinner';
import { ErrorIndicator } from '../errorIndicator/ErrorIndicator';

type MapStateToPropsType = {
  books: Array<BookType>;
  loading: boolean;
  error: null | string
};

type MapDispatchToPropsType = {
  booksLoadedAC: (newBooks: Array<BookType>) => ActionBooksLoadedType;
  booksRequestedAC: () => ActionBooksRequestedType;
  booksErrorAC: (error: Error) => ActionBooksErrorType;
};

type BookListPropsType = MapStateToPropsType & MapDispatchToPropsType;

const BookList = (props: BookListPropsType) => {
  const { getBook } = bookStoreService();
  const { books, loading, error, booksLoadedAC, booksRequestedAC, booksErrorAC } = props;

  useEffect(() => {
    booksRequestedAC();
    getBook().then((data) => {
      booksLoadedAC(data);
    }).catch(booksErrorAC);
  }, []);

  const renderBooks = (books: BookType []) => {
    return (
      <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
    )
  }

  const spinner = loading ? <Spinner /> : null;
  const isError = error? <ErrorIndicator errorMsg={error}/>: null
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

const mapDispatchToProps = { booksLoadedAC, booksRequestedAC, booksErrorAC };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
