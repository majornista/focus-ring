const { fixture, matchesKeyboard, matchesMouse } = require('./helpers');

describe('<input type="date">', function() {
  beforeEach(function() {
    return fixture('input-date.html');
  });

  it('should apply .focus-visible on keyboard focus', function() {
    return matchesKeyboard();
  });

  it('should apply .focus-visible on mouse focus', function() {
    // Skip test in Microsoft Edge. It displays a modal UI on mouse click.
    if (process.env.TEST_BROWSER.includes('Edge')) {
      this.skip();
    } else if (process.env.TEST_BROWSER.includes('Internet Explorer')) {
      return matchesMouse();
    } else {
      return matchesMouse(false);
    }
  });
});
