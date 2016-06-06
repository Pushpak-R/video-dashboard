var appModule = angular.module('ngRL');
appModule.factory('httpInterceptor', function($q, $rootScope, $log) {

	var numLoadings = 0;
	var urls = [];
	var firstPopup = false;

	return {
		request : function(config) {

				numLoadings++;
				$rootScope.$broadcast("loader_show");

			return config || $q.when(config);

		},
		response : function(response) {
				if ((--numLoadings) === 0) {
					$rootScope.$broadcast("loader_hide");
				}
			return response || $q.when(response);
		},
		responseError : function(response) {
			if (!(--numLoadings)) {
				$rootScope.$broadcast("loader_hide");
			}
			if (response.status == 500) {
				alert("Internal Server Error");
			}
			if ((response.status == 401 || response.status == 403 || response.status == -1) && !firstPopup) {
				alert("Permission Error");
			}
			console.log("API response error", response);
			return $q.reject(response);
		}
	};
}).config(function($httpProvider) {
	$httpProvider.interceptors.push('httpInterceptor');
});
appModule.factory('$ionicLoading', function($rootScope) {
	var service = {
		show : function(){
			$rootScope.showLoader = true;
		},
		hide : function(){
			$rootScope.showLoader = false;
		}
	};
	return service;
});
