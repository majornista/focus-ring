const { fixture, matchesKeyboard, matchesMouse } = require('./helpers');

describe('<textarea>', function() {
  beforeEach(function() {
    return fixture('textarea.html');
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
