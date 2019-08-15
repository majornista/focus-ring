const { fixture, matchesKeyboard, matchesMouse } = require('./helpers');

describe('<input type="text">', function() {
  beforeEach(function() {
    return fixture('input-text.html');
  });

  it('should apply .focus-visible on keyboard focus', function() {
    return matchesKeyboard();
  });

  it('should apply .focus-visible on mouse focus', function() {
    if (process.env.TEST_BROWSER.includes('Internet Explorer')) {
      return matchesMouse();
    } else {
      return matchesMouse(false);
    }
  });
});
