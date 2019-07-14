import 'bootstrap-css-only';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';


const myApp = angular.module('app', [ComponentsModule.name]).component('app', appComponent);

myApp.controller('controlVote', ['$scope' ,function($scope) {

  $scope.Carolina = 1;
  $scope.Mario = 1;
  $scope.Leonardo = 1;
  $scope.Joaquin = 1;

  $scope.Guardar = function() {
    console.log("estoy en el control votar");

    
  }

}])