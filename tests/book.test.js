const request = require('supertest');

const { runSeeding, clearTable, getToken } = require('./test.data');
const app = require('../app');

describe('Books test', () => {
  before(async () => {
    await clearTable();
    await runSeeding();
  });

  describe('GET /books', () => {
    it('should receive an error 401 without authorization', async () => {
      await request(app)
        .get('/books')
        .expect(401);
    });

    it('should get a list of books tied to the university', async () => {
      const token = await getToken();

      await request(app)
        .get('/books')
        .set('authorization', `Bearer ${token}`)
        .expect(200);
    });
  });
});
