const request = require('supertest');

const app = require('../app');

const User = require('../src/models/User/user.model');
const Institution = require('../src/models/Institution/institution.model');
const Book = require('../src/models/Book/book.model');

const incorrectEmail  = 'test@incorrect.domain';

const testUser  = {
  name: 'test-second',
  email: 'test-second@mit.com',
  role: 'student',
  password: '$2a$10$nkmsAkrgZbUeO313KseaHe6B8dHyyQbyjvdMvw1UjoZ4xxfJgeHLe', // password: 1233452
  institutionId: 1,
};

const user  = {
  name: 'test',
  email: 'test@mit.com',
  role: 'student',
  password: '$2a$10$nkmsAkrgZbUeO313KseaHe6B8dHyyQbyjvdMvw1UjoZ4xxfJgeHLe', // password: 1233452
  institutionId: 1,
};

const institutions  = [
  {
    name: 'Massachusetts Institute of Technology',
    url: 'student',
    email: 'Massachusetts@mit.com',
  },
  {
    name: 'Oxford University',
    url: 'student',
    email: 'Oxford@oxford.com',
  },
];

const books = [
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
];

const clearTable = async () => {
  await User.destroy({ where: {}, truncate: true });
  await Book.destroy({ where: {}, truncate: true });
  await Institution.destroy({ where: {}, truncate: true });
};

const runSeeding = async () => {
  await Institution.bulkCreate(institutions);
  await Book.bulkCreate(books);
  await User.create(user);
};

const getToken = async () => {
  const res = await request(app)
    .post('/users/signin')
    .send({
      email: 'test@mit.com',
      password: '1233452',
    });

  return res.body.data.token;
};

module.exports = {
  testUser,
  incorrectEmail,
  clearTable,
  runSeeding,
  getToken,
};


