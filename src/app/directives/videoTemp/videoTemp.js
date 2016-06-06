var appModule = angular.module('ngRL');
appModule.directive('videoTemp', function() {
  return {
    restrict : 'E',
    templateUrl : 'directives/videoTemp/videoTemp.tpl.html',
    transclude : 'true',
    replace : 'true',
    scope : {
      video: '='
    },
    link : function($scope, $elem, $attr){
      console.log($scope.video);
    }
  };
});
