// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope) {
  

  $scope.name       = "juan";
  $scope.occupation = "programmer";
  $scope.getName    = function(){
      return "Inge deRodriguez";
  };
  $scope.bla = $scope.getName();
  console.log($scope);
  console.log($scope.getName());

});

var searchPeople = function(firstName, lastName, height, age, occupation){
    return "Wil Palomo";
 };

console.log(angular.injector().annotate(searchPeople));