
import supertest from 'supertest';
import 'dotenv/config';
class UsersHelper {
  constructor() {
    this.response = null;
  }

  async create() {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/users')
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      //Save a response from server to result variable
      .then((res) => {
        this.response = res;
      });
  }
  async getAll() {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .get('/users')
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      //Save a response from server to result variable
      .then((res) => {
        this.response = res;
      });
  }
  async delete(userID) {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .delete('/users')
      .send({id:userID})
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      //Save a response from server to result variable
      .then((res) => {
        this.response = res;
      });
  }
}

export default UsersHelper;

