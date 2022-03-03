
import supertest from 'supertest';
import 'dotenv/config';
class TransactionsHelper {
  constructor() {
    this.response = null;
  }

  async create(senderID, reseverID, value) {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/transactions')
//Save a response from server to result variable
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      //Setup payload - object with 3 keys - senderID and reseverID and value
      .send({ from: senderID, to: reseverID, amount: value })
      .then((res) => {
        this.response = res;
      });
  }
  
}

export default TransactionsHelper;

