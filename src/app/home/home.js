angular.module( 'ngRL.home', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    abstract: 'true',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeCtrl($scope) {

  $scope.menus = [{
    "name":"Leads",
    "path":"/leads"
  },{
    "name":"Appointments",
    "path":"/appointments",
    "submenu" : [{"name":"Scheduled","path":"/scheduled"},{"name":"Rescheduled","path":"/rescheduled"}]
  },{
    "name":"Loan Application",
    "path":"/loanApplication",
    "submenu" : [{"name":"New Form","path":"/newForm"},{"name":"Applications","path":"/applications"}]
  },{
    "name":"Task",
    "path":"/task"
  },{
    "name":"Track",
    "path":"/track"
  },{
    "name":"Sanctions",
    "path":"/sanctions"
  },{
    "name":"Disbursements",
    "path":"/disbursements"
  },{
    "name":"Messages",
    "path":"/messages"
  }];

});
