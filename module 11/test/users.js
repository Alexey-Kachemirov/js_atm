const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendReqGetResp');
const getComment = require('../data/getUsers');
const env = require('../endpoint/jsonPlaceholder');

describe('Get response status, header and body', () => {

  getComment.map((data) => {
    let response;
    let id = parseInt(data.uri.split('/')[2]);

    before(async () => {
      data.uri = env.uri + data.uri;
      response = await sendRequest(data);
    });

    it('Verifying status code of the obtained response is 200 OK', () => {
      expect(response.statusCode).to.eql(200);
    });

    it('Verifying content-type header exists and equals "application/json; charset=utf-8"', () => {
      expect(response.headers['content-type']).to.include('application/json; charset=utf-8');
    });

    it('Verifying content of the response body is the array of 10 users', () => {
      expect(response.body.length).to.eql(10);
    });
  })

});