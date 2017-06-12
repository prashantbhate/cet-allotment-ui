import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   filterBy(param) {
     let results = this.get('store').query('allotment', param)
     return results;
   }
  }
});
