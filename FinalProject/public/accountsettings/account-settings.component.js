//'use strict';

angular.
  module('accountSettings').
  component('accountSettings', {
    templateUrl: 'accountsettings/account-settings.template.html',
    controller: ['$scope', '$http', '$routeParams', '$location', '$cookies', function accountSettingsController($scope, $http, $routeParams, $location, $cookies) {
      var self = this;
      var user = $cookies.get("username");
      
/////////////////////////////////////////////////////////////////////////////////     
      
    $scope.changeprofiletype = function(value) {
        var priv = true;
        if (value == "public"){
            priv = false;
        }
       
        $http({
        method: 'POST',
        url:'/changeinfo',
        data: {"user": user, "typeofrequest": "changeprivate", "value": priv}
      })
      .then(function(response) {
            
        });
    };

/////////////////////////////////////////////////////////////////////////////////

    $scope.change = function(newValue, typeOfRequest){

        $http({
        method: 'POST',
        url:'/changeinfo',
        data: {"user": user, "typeofrequest": typeOfRequest, "value": newValue}
      })
      .then(function(response) {
            
        });
      };  
    }]
});