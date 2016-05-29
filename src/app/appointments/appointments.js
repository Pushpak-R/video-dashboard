angular.module( 'ngRL.appointments', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home.appointments', {
    url: '/appointments',
    views: {
      "home-view": {
        controller: 'appointmentsCtrl',
        templateUrl: 'appointments/appointments.tpl.html'
      }
    },
    data:{ pageTitle: 'Appointments' }
  });
})

.controller( 'appointmentsCtrl', function appointmentsCtrl( $scope ) {


});
