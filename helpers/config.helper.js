
import supertest from 'supertest';
import 'dotenv/config';
class ConfigHelper {
  constructor() {
    this.response = null;
  }

  async get() {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .get('/config')
//Save a response from server to result variable
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      //Setup payload - object with 3 keys - senderID and reseverID and value
      .then((res) => {
        this.response = res;
      });
  }
  async patch(number, amount) {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .get('/config')
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      .send({numberOfEntries:number , initialAmount:amount})
      //Save a response from server to result variable
      .then((res) => {
        this.response = res;
      });
  }
  async delete() {
    //Send async request
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .delete('/config')
      .set('Authorization',`Bearer ${process.env.TOKEN}`)
      //Save a response from server to result variable
      .then((res) => {
        this.response = res;
      });
  }

}

export default ConfigHelper;

