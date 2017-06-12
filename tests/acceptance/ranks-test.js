import { test } from 'qunit';
import moduleForAcceptance from 'cet-allotment-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ranks');

test('visiting /allotments', function(assert) {
  visit('/allotments');
  andThen(function() {
    assert.equal(currentURL(), '/allotments');
  });
});

test('should show allotments as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/allotments', 'should redirect automatically');
  });
});
