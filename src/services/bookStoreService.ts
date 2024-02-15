import { v1 } from 'uuid';
import { BookType } from '../types/types';

export const bookStoreService = () => {
  const data: Array<BookType> = [
    {
      id: v1(),
      title: 'Production-Ready Microservices',
      titleShort: 'production-ready-microservices',
      author: 'Susan J. Fowler',
      price: 50,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: v1(),
      title: 'Release It!',
      titleShort: 'release-it',
      author: 'Michael T. Nygard',
      price: 40,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
  ];

  const getBooks = (): Promise<Array<BookType>> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('We have some problems with fetching data!'));
        } else {
          resolve(data);
        }
      }, 700);
    });
  };

  const getBook = (bookName: string): Promise<BookType | undefined> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('We have some problems with fetching book!'));
        } else {
          resolve(data.find((book) => book.titleShort === bookName));
        }
      }, 700);
    });
  };
  return { getBooks, getBook };
};
