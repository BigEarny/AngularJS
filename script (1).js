var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){ //parsing info from .JSON
	$http.get('tellerbook.json').success(function (data){
		$scope.tellerbook = data;
	});

    $scope.addCus = function(){
        $scope.tellerbook.push({ name:$scope.inName, country:$scope.inCountry, balance:$scope.inBalance });
    }
    
    $scope.getTotalCustomer = function(){
        return $scope.tellerbook.length;    
    }
        
    $scope.reversedMessage = function(){
        return $scope.inName.split("").reverse().join("");
    }
    $scope.save = function(){
        $scope.table = $('displayTable').tableToJSON();
        $scope.mess = table;
    }

	$scope.cancelModal = function(){
	 modalInstance.dismiss('cancel');
	}
});

function testCtrl($scope){
  $scope.names = [
    {name:"Ramesh"},
    {name:"Vinod"},
    {name:"Ateendra"}
    ];
    
   $scope.addName = function(){
      $scope.names.push({ name:$scope.myName });
   }
   
    $scope.reversedMessage  =   function(){
        return $scope.myName.split("").reverse().join("");
    }
    
}