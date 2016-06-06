var appModule = angular.module('ngRL');
appModule.factory('restService', function($http) {
  var apiPath = "https://amagi.herokuapp.com/ui-test/api/v1/spots";
  var serviceObj = {
    getVideoDetails : function(){
      return $http.get(apiPath, { cache : true });
    }
  };
  return serviceObj;
});
