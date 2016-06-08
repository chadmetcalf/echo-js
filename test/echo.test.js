var expect = require('expect.js');
eval(require('fs').readFileSync('src/echo.js', 'utf8'));

describe('echo client', function() {
  describe('#init', function() {
    it('requires a user id', function() {
      echo.init('123', '222')
    })

    xit('aims at notification app')
  });

  describe('#notifications', function() {
    describe('sends request', function() {
      xit('formats data')
      xit('has callback')
    });
  });

  describe('callback?', function() {
    describe('processes response', function() {
      xit('understand payload format')
      xit('prepares data for consumption')
    });
  });
});
