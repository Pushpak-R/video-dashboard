angular.module( 'ngRL', [
  'templates-app',
  'templates-common',
  'ngRL.home',
  'ngSanitize',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ($rootScope, $ionicLoading) {
  $rootScope.$on("loader_hide",function(){
    $ionicLoading.hide();
  });
  $rootScope.$on("loader_show",function(){
    $ionicLoading.show();
  });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | RL' ;
    }
  });

});
