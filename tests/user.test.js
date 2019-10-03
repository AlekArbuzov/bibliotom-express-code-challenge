const request = require('supertest');

const { testUser, incorrectEmail, runSeeding, clearTable } = require('./test.data');
const app = require('../app');

describe('Users test', () => {
  before(async () => {
    await clearTable();
    await runSeeding();
  });

  describe('POST /users/create', () => {
    it('should get 404 when not send email', async () => {
      await request(app)
        .post('/users/create')
        .expect(404);
    });

    it('should get a 404 error because the email address is set is not correct and the institution can not be found', async () => {
      await request(app)
        .post('/users/create')
        .send({ email: incorrectEmail })
        .expect(404);
    });

    it('should get 201 when user create success', async () => {
      await request(app)
        .post('/users/create')
        .send(testUser)
        .expect(201);
    });
  });

  describe('POST /users/signin', () => {
    it('should get 404 when not send data', async () => {
      await request(app)
        .post('/users/signin')
        .expect(404);
    });

    it('should get 404 when the transfer invalid email', async () => {
      await request(app)
        .post('/users/signin')
        .send({ email: incorrectEmail })
        .expect(404);
    });

    it('should get 200 when the transfer invalid email', async () => {
      await request(app)
        .post('/users/signin')
        .send(testUser)
        .expect(200);
    });
  });
});
