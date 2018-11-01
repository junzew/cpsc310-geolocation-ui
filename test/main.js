
var expect = chai.expect;

wait = ms => new Promise(res => setTimeout(res, ms));

describe('Campus Explorer - ', function() {
  this.timeout(15000000);
  this.UI_DELAY = 10;

  beforeEach(function(done) {
    karmaHTML.index.onstatechange = function(ready) {
      //if the #Document is ready, fire tests
      //the done() callback is the jasmine native async-support function
      if (ready) {
        setTimeout(done, 500);
      }
    };
    karmaHTML.index.reload();
  });
  
  it('should have the title "Address Explorer"', function() {
      var _document = karmaHTML.index.document;
      expect(_document.title).to.equal('Address Explorer');
    });

  it('should not have the label showing anything on start', function() {
      var _document = karmaHTML.index.document;
      let resultMessage = _document.getElementById('result-message');
      expect(resultMessage.innerText).to.equal('');
    });
});