import { v1 } from 'uuid';
import { BookType } from '../components/types/types';

export const bookStoreService = () => {

  const getBook = (): Array<BookType> => {
    return [
      {
        id: v1(),
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
      },
      {
        id: v1(),
        title: 'Release It!',
        author: 'Michael T. Nygard',
      },
    ];
  };

  return {getBook};
};
