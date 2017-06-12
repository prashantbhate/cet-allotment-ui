export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = '/api';
  this.get('/allotments', ({ allotments },request) => {
    let a = allotments.where(
          function(allotment) {
          let college=allotment.collegeName.toLowerCase();
          let branch=allotment.branchName.toLowerCase();
          let quota=allotment.quota.toLowerCase();
          let qCollege=request.queryParams.college.toLowerCase();
          let qBranch=request.queryParams.branch.toLowerCase();
          let qQuota=request.queryParams.quota.toLowerCase();

          return college.indexOf(qCollege) !== -1
          && branch.indexOf(qBranch) !== -1
          && quota.indexOf(qQuota) !== -1
          && allotment.cutoffRank < request.queryParams.highCutoffRank
          && allotment.cutoffRank > request.queryParams.lowCutoffRank;

        });
        return a.sort(function(a, b) {
    return a.cutoffRank - b.cutoffRank;
  }).slice(0, request.queryParams.limit);
});
  // this.get('/allotments', function(db, request) {
  //   let filteredAllotments = db.allotments.where(
  //     function(allotment) {
  //     let college=allotment.collegeName.toLowerCase();
  //     let branch=allotment.branchName.toLowerCase();
  //     let quota=allotment.quota.toLowerCase();
  //     let qCollege=request.queryParams.college.toLowerCase();
  //     let qBranch=request.queryParams.branch.toLowerCase();
  //     let qQuota=request.queryParams.quota.toLowerCase();
  //     return college.indexOf(qCollege) !== -1
  //     && branch.indexOf(qBranch) !== -1
  //     && quota.indexOf(qQuota) !== -1;
  //   });
  //   return { allotments: filteredAllotments };
  // });

}
