import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  ActionBooksLoadedType,
  booksLoadedAC,
} from '../../store/actions/actions';
import { AppRootState } from '../../store/store';
import { BookListItem } from '../bookListItem/BookListItem';
import { bookStoreService } from '../../services/bookStoreService';
import { BookType } from '../types/types';

import './BookList.css';
import { Spinner } from '../spinner/Spinner';

type MapStateToPropsType = {
  books: Array<BookType>;
  loading: boolean;
};

type MapDispatchToPropsType = {
  booksLoadedAC: (newBooks: Array<BookType>) => ActionBooksLoadedType;
};

type BookListPropsType = MapStateToPropsType & MapDispatchToPropsType;

const BookList = (props: BookListPropsType) => {
  const { getBook } = bookStoreService();
  const { books, booksLoadedAC, loading } = props;

  useEffect(() => {
    getBook().then((data) => {
      booksLoadedAC(data);
    });
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const content = !loading ? (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <>
      {spinner}
      {content}
    </>
  );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return { books: state.booksList.books, loading: state.booksList.loading };
};

const mapDispatchToProps = { booksLoadedAC };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
