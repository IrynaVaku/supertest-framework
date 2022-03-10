import 'dotenv/config'
import { expect } from 'chai';
import UsersHelper from '../helpers/users.helper';
import TransactionsHelper from '../helpers/transactions.helper';
import {getRandomItem} from '../helpers/common.helper'
const usersHelper = new UsersHelper();
const transactionsHelper = new TransactionsHelper();
describe('Main test suits for Transactions', () => {
  let senderID;
  let reseverID;
  let amount;
describe('\nSuccessful create transaction', () => {
  before(async () => {
    await usersHelper.getAll();
//console.log(usersHelper.response.body);
senderID = getRandomItem(usersHelper.response.body).id; 
//console.log( getRandomItem(usersHelper.response.body), 'new transaction Response'); 
 reseverID = getRandomItem(usersHelper.response.body).id; 
 amount = 100
 await transactionsHelper.create(senderID, reseverID, amount)
 //console.log(transactionsHelper.response.body);
  });

  it('Checking that response status code is 200', () => {
    expect(transactionsHelper.response.statusCode).to.eq(200);
  })

  it('Checking that response contains ID  key that is not undefined', () => {
    expect(transactionsHelper.response.body.id).not.to.be.undefined;
  });
  
  it('Checking that response contains from key that is not undefined', () => {
    expect(transactionsHelper.response.body.from).not.to.be.undefined;
  });
  it('Checking that response contains to key that is not undefined', () => {
    expect(transactionsHelper.response.body.to).not.to.be.undefined;
  });
  it('Checking that response contains amount key that is not undefined', () => {
    expect(transactionsHelper.response.body.amount).not.to.be.undefined;
  });
  it(`Checking that response contains amount key with value is ${amount}`, () => {
    expect(transactionsHelper.response.body.amount).to.be.eq(amount);
  });
  it(`Checking that response contains amount  is a number`, () => {
    expect(transactionsHelper.response.body.amount).to.be.an('number');
  });
  it(`Checking that response contains ID is a string`, () => {
    expect(transactionsHelper.response.body.id).to.be.an('string');
  });
  it(`Checking that response contains ID key has a length 36 symbols`, () => {
    expect(transactionsHelper.response.body.id.length).to.be.eq(36);
  });
  it(`Checking that response contains from key with value is ${senderID}`, () => {
    expect(transactionsHelper.response.body.from).to.be.eq(senderID);
  });
  it(`Checking that response contains from key has a length 36 symbols`, () => {
    expect(transactionsHelper.response.body.from.length).to.be.eq(36);
  });
  it(`Checking that response contains from is a string`, () => {
    expect(transactionsHelper.response.body.from).to.be.an('string');
  });
  it(`Checking that response contains to key with value is ${reseverID}`, () => {
    expect(transactionsHelper.response.body.to).to.be.eq(reseverID);
  });
  it(`Checking that response contains to key has a length 36 symbols`, () => {
    expect(transactionsHelper.response.body.to.length).to.be.eq(36);
  });
  it(`Checking that response contains to is a string`, () => {
    expect(transactionsHelper.response.body.to).to.be.an('string');
  });
});
})
