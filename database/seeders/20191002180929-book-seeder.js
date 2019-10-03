'use strict';

const { tableName } = require('../../src/models/Book/book.schema');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        isbn: '00-1',
        title: 'book 1',
        author: 'persone 1',
        institutionId: 1,
      },
      {
        isbn: '00-2',
        title: 'book 2',
        author: 'persone 2',
        institutionId: 2,
      },
      {
        isbn: '00-3',
        title: 'book 3',
        author: 'persone 3',
        institutionId: 1,
      },
      {
        isbn: '00-4',
        title: 'book 4',
        author: 'persone 4',
        institutionId: 1,
      },
      {
        isbn: '00-5',
        title: 'book 5',
        author: 'persone 5',
        institutionId: 2,
      },
      {
        isbn: '00-6',
        title: 'book 6',
        author: 'persone 6',
        institutionId: 2,
      },
      {
        isbn: '00-7',
        title: 'book 7',
        author: 'persone 7',
        institutionId: 2,
      },
      {
        isbn: '00-8',
        title: 'book 8',
        author: 'persone 8',
        institutionId: 2,
      },
      {
        isbn: '00-9',
        title: 'book 9',
        author: 'persone 9',
        institutionId: 1,
      },
      {
        isbn: '00-10',
        title: 'book 10',
        author: 'persone 10',
        institutionId: 2,
      },
      {
        isbn: '00-11',
        title: 'book 11',
        author: 'persone 11',
        institutionId: 2,
      },
      {
        isbn: '00-12',
        title: 'book 12',
        author: 'persone 12',
        institutionId: 1,
      },
      {
        isbn: '00-13',
        title: 'book 13',
        author: 'persone 13',
        institutionId: 2,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null);
  }
};
