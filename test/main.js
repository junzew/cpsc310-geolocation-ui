
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

  it('The map should show "6245 Agronomy Road V6T 1Z4" successfully', async function() {
      var _document = karmaHTML.index.document;
      _document.getElementById('address-textarea').value = "6245 Agronomy Road V6T 1Z4";
      await wait(this.UI_DELAY);
      _document.getElementById('query-button').click();
      await wait(3000);
      let mapIframe = _document.getElementById('map-iframe');
      expect(mapIframe.src).to.equal('http://www.openlinkmap.org/small.php?lat=49.26125&lon=-123.24807&zoom=18');
    });

  it('The map should not show "6245 Agronomy Road V6T": wrong address', async function() {
      var _document = karmaHTML.index.document;
      _document.getElementById('address-textarea').value = "6245 Agronomy Road V6T";
      await wait(this.UI_DELAY);
      _document.getElementById('query-button').click();
      await wait(3000);
      let mapIframe = _document.getElementById('map-iframe');
      expect(mapIframe.style.visibility).to.equal('hidden');
    });
});