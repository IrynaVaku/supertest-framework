import 'dotenv/config'
import { expect } from 'chai';
import UsersHelper from '../helpers/users.helper';
import {getRandomItem} from '../helpers/common.helper'
const usersHelper = new UsersHelper();
describe('Main test suits for Users )', () => {
  let userID;
describe('\nSuccessful create user )', () => {
  before(async () => {
    await usersHelper.create();
  });
  it('Checking that response status code is 200', () => {
    expect(usersHelper.response.statusCode).to.eq(200);
  })
  it('Checking that response contains ID key that is not undefined', () => {
    expect(usersHelper.response.body.id).not.to.be.undefined;
  });
  it('Checking that response contains amount key that is not undefined', () => {
    expect(usersHelper.response.body.amount).not.to.be.undefined;
  });
  it('Checking that response contains amount key with value that is 1000', () => {
    expect(usersHelper.response.body.amount).to.be.eq(1000);
  });
});

describe('Successful get all users)', () => {
  before(async () => {
    await usersHelper.create();
    await usersHelper.create();
    await usersHelper.create();
    await usersHelper.create();
    await usersHelper.getAll();
  });
  it('Checking that response status code is 200', () => {
    expect(usersHelper.response.statusCode).to.eq(200);
  });
  it('Checking that random user response body contains userID', () => {
    expect(getRandomItem(usersHelper.response.body).id).not.to.be.undefined;
  });
  it('Checking that random user response body contains amount', () => {
    expect(getRandomItem(usersHelper.response.body).amount).not.to.be.undefined;
  });
  it('Checking that random user response body amount key has value 1000', () => {
    expect(getRandomItem(usersHelper.response.body).amount).to.be.eq(1000);
  });
});

describe('Successful delete user)', () => {
  before(async () => {
    //await usersHelper.create();
    await usersHelper.delete(userID);
  });
  it('Checking that response status code is 200', () => {
    expect(usersHelper.response.statusCode).to.eq(200);
  });
  it('Checking that response contains message', () => {
    expect(usersHelper.response.body.message).to.be.eq("User deleted.");
  });
});
})
