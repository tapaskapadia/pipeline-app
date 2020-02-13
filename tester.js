"use strict";

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var app = require('./index.js')

chai.use(chaiHttp);

describe('Get / Status Check', () => {
    it('should return a succesful UP response', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
              expect(res.status).to.equal(200)
               console.log(res.body)
            done();
          });
    });
});