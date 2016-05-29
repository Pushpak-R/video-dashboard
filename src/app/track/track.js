angular.module( 'ngRL.track', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home.track', {
    url: '/track',
    views: {
      "home-view": {
        controller: 'trackCtrl',
        templateUrl: 'track/track.tpl.html'
      }
    },
    data:{ pageTitle: 'Track' }
  });
})

.controller( 'trackCtrl', function trackCtrl( $scope ) {

});
