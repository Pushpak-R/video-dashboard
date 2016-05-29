var appModule = angular.module('ngRL');
appModule.directive('rlPopup', function() {
  return {
    restrict : 'E',
    templateUrl : 'directives/popup/popup.tpl.html',
    transclude : 'true',
    replace : 'true',
    link : function($scope, $elem, $attr){
      $scope.popupHeading = $attr.heading;
      $scope.popupText = $attr.text;
    }
  };
});
