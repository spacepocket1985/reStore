import { v1 } from 'uuid';
import { BookType } from '../types/types';

export const bookStoreService = () => {
  const data: Array<BookType> = [
    {
      id: v1(),
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: v1(),
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
  ];

  const getBook = (): Promise<Array<BookType>> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('We have some problems!'));
        } else {
          resolve(data);
        }
      }, 700);
    });
  };
  return { getBook };
};
