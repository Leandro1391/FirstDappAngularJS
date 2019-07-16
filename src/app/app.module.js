import 'bootstrap-css-only';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';


const myApp = angular.module('app', [ComponentsModule.name]).component('app', appComponent);

myApp.controller('controlVote', ['$scope' ,function($scope) {
  let voteCarol = 0 , voteMario = 0 , voteLeo = 0 , VoteJoa = 0;

  $scope.candidates = [
    {name : "Carolina"},
    {name : "Mario"},
    {name : "Leonardo"},
    {name : "Joaquin"}
  ];

  $scope.Carolina = voteCarol;
  $scope.Mario = voteMario;
  $scope.Leonardo = voteLeo;
  $scope.Joaquin = VoteJoa;

  $scope.Guardar = function(candidato) {

    console.log("estoy en el control votar");
    console.log("Candidato elegido: " + candidato.name);

    switch(candidato.name) {
      case 'Carolina':
        voteCarol += 1;
        break;
      case "Mario":
        voteMario += 1;
        break;
      case "Leonardo":
        voteLeo += 1;
        break;
      case "Joaquin":
        VoteJoa += 1;
      default:
        console.log("not choose in one case");
    }

    $scope.Carolina = voteCarol;
    $scope.Mario = voteMario;
    $scope.Leonardo = voteLeo;
    $scope.Joaquin = VoteJoa;
    console.log(voteCarol);

  }

}])