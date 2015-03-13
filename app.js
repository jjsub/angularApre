// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filter) {
  

  $scope.name = "Juan";
  $scope.formattedname = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedname);

// console.log($log);

// $log.log("Hooola!!!");
// $log.info("This is some greate information about angular.js");
// $log.warn("Warning!!!!!");
// $log.debug("Some debug info");
// $log.error("Errrorrrrrr!!!!");

});






//   $scope.name       = "juan";
//   $scope.occupation = "programmer";
//   $scope.getName    = function(){
//       return "Inge deRodriguez";
//   };
//   $scope.bla = $scope.getName();
//   console.log($scope);
//   console.log($scope.getName());

// });

// var searchPeople = function(firstName, lastName, height, age, occupation){
//     return "Wil Palomo";


// console.log(angular.injector().annotate(searchPeople));