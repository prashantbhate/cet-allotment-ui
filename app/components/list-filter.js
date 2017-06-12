import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter row'],
  filterParams:{
    college:'',
    branch:'CS Computers',
    quota:'GMK',
    highCutoffRank:'12000',
    lowCutoffRank:'0',
    limit:'10'
  } ,

  init() {
    this._super(...arguments);
    let filterAction = this.get('filter');
    let filterParams = this.get('filterParams');
    filterAction(filterParams).then((results) =>
    this.set('results', results)
  );
  },

  actions: {
    handleFilterEntry() {
      let filterAction = this.get('filter');
      filterAction(this.get('filterParams')).then((filterResults) =>
      this.set('results', filterResults)
    );
    }
  }
});
