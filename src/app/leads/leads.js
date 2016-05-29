angular.module( 'ngRL.leads', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home.leads', {
    url: '/leads',
    views: {
      "home-view": {
        controller: 'leadsCtrl',
        templateUrl: 'leads/leads.tpl.html'
      }
    },
    data:{ pageTitle: 'Leads' }
  });
})

.controller( 'leadsCtrl', function leadsCtrl( $scope, restService) {

  var getLoan = restService.getLoanDetails();
  getLoan.then(function(res){
    $scope.loanDetails = res.data.loanDetails;
  },function(err){
    alert(err);
  });
});
