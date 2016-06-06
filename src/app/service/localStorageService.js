var appModule = angular.module('ngRL');
appModule.factory('localStorage', function($http) {
  var serviceObj = {
    getSavedDetails : function(){
      var items = localStorage.getItem('videos');
      if(items != undefined || items != null){
        return JSON.parse(items);
      }
    },
    saveDetails : function(video){
      var items = localStorage.getItem('videos');
      if(items != undefined || items != null){
        items = JSON.parse(items);
      }else{
        items = [];
      }
      items.forEach(function(item){
        if(item.id == video.id){
          return;
        }
      });
      if(items.length >= 10){
        items.pop();
      }
        items.unshift(video);
      console.log(JSON.stringify(items));
      localStorage.setItem('videos',JSON.stringify(items));
    }
  };
  return serviceObj;
});
