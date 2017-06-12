import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('allotment-details', 'Integration | Component | allotment details', {
  integration: true
});

test('it renders', function(assert) {

let allotment = {
  "collegeName" : "E005  R. V. College of Engineering  Bangalore",
  "branchName" : "CS Computers",
  "quota" : "GMK",
  "cutoffRank" : 1555
};
  this.set('it', allotment);
  this.render(hbs`{{allotment-details allotment=it}}`);
  assert.equal(this.$('.listing h3').text(), 'E005  R. V. College of Engineering  Bangalore', 'Title: test-title');
  assert.equal(this.$('.listing .location').text().trim(), 'Quota: GMK');

});
