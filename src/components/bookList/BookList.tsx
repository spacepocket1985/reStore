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

type MapStateToPropsType = {
  books: Array<BookType>;
};

type MapDispatchToPropsType = {
  booksLoadedAC: (newBooks: Array<BookType>) => ActionBooksLoadedType;
};

type BookListPropsType = MapStateToPropsType & MapDispatchToPropsType;

const BookList = (props: BookListPropsType) => {
  const { getBook } = bookStoreService();
  const { books, booksLoadedAC } = props;

  useEffect(() => {
    getBook().then((data) => {
      booksLoadedAC(data);
    });
  }, []);

  return (
    <>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return { books: state.booksList.books };
};

const mapDispatchToProps = { booksLoadedAC };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
