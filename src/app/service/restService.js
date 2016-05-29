var appModule = angular.module('ngRL');
appModule.factory('restService', function($http) {
  var apiPath = "assets/";
  var serviceObj = {
    getLoanDetails : function(){
      return $http.get(apiPath + "loanDetails.json", { cache : true });
    }
  };
  return serviceObj;
});
