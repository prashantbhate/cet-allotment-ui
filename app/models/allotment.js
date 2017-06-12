import DS from 'ember-data';

export default DS.Model.extend({

    "collegeName" : DS.attr(),
    "branchName" : DS.attr(),
    "quota" : DS.attr(),
    "cutoffRank" : DS.attr()

});
