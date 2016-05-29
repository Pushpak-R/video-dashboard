angular.module( 'ngRL.task', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home.task', {
    url: '/task',
    views: {
      "home-view": {
        controller: 'taskCtrl',
        templateUrl: 'task/task.tpl.html'
      }
    },
    data:{ pageTitle: 'Task' }
  });
})

.controller( 'taskCtrl', function taskCtrl( $scope ) {


});
