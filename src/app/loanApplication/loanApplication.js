angular.module( 'ngRL.loanApplication', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home.loanApplication', {
    url: '/loanApplication',
    views: {
      "home-view": {
        controller: 'loanApplicationCtrl',
        templateUrl: 'loanApplication/loanApplication.tpl.html'
      }
    },
    data:{ pageTitle: 'Loan Application' }
  });
})

.controller( 'loanApplicationCtrl', function loanApplicationCtrl( $scope ) {
  
});
