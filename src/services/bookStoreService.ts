import { v1 } from 'uuid';
import { BookType } from '../components/types/types';

export const bookStoreService = () => {

  const getBook = (): Array<BookType> => {
    return [
      {
        id: v1(),
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: '40',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      },
      {
        id: v1(),
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: '50',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
      },
    ];
  };

  return {getBook};
};
