angular.module( 'ngRL.home', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
}).filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }])

.controller( 'HomeCtrl', function HomeCtrl($scope, restService, localStorage) {

  $scope.viewedVideos = localStorage.getSavedDetails();
  $scope.showLastSeen = false;

  var getVideoDetails = restService.getVideoDetails();
  getVideoDetails.then(function(res){
    console.log(res);
    $scope.videoDetails = res.data;
    convertVideoDetailsInGroups();
  },function(err){
    console.log(err);
  });

  $scope.convertTo = function (arr, key) {
    var groupByDate = {};
    for (var i=0;l= arr.length, i<l;i++) {
      arr[i][key] = (new Date(arr[i][key])).toLocaleDateString();
      groupByDate[arr[i][key]] = groupByDate[arr[i][key]] || [];
      groupByDate[arr[i][key]].push(arr[i]);
    }
    return groupByDate;
  };

  function convertVideoDetailsInGroups(){
    $scope.groupedVideoDetails = [];
  	 angular.copy($scope.videoDetails, $scope.groupedVideoDetails);

  	var groupedDetails = $scope.convertTo($scope.groupedVideoDetails, 'aired_at');
    console.log(groupedDetails);
    $scope.groupedVideoDetails = convertObjectToSortedArray(groupedDetails, 'aired_at', true);

  }

  function convertObjectToSortedArray(items, field, reverse){
    var filtered = [];
    for (var key in items){
      filtered.push([key, items[key]])
    }
    filtered.sort(function (a, b) {
      return (new Date(a[0]) - new Date(b[0]));
    });

    if(reverse) filtered.reverse();
    return filtered;
  }

  $scope.videoClicked = function(video, saveIt){
    console.log(video);
    $scope.selectedVideo = video;
    $scope.showModal = true;
    if(!saveIt){
        localStorage.saveDetails(video);
    }
  }

});
