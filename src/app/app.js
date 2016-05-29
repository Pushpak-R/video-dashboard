angular.module( 'ngRL', [
  'templates-app',
  'templates-common',
  'ngRL.home',
  'ngRL.leads',
  'ngRL.appointments',
  'ngRL.loanApplication',
  'ngRL.task',
  'ngRL.track',
  'ngSanitize',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home/leads' );
})

.run( function run () {

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | RL' ;
    }
  });

  $state.go("home.leads");

});
