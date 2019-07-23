import 'bootstrap-css-only';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import getWeb3 from './app.getWeb3';
import VotacionContract from "./votacion";


const myApp = angular.module('app', [ComponentsModule.name]).component('app', appComponent);

myApp.controller('controlVote', ['$scope' ,'notify' , async function($scope, notify) {
  let voteCarol = 0 , voteMario = 0 , voteLeo = 0 , VoteJoa = 0;

  this.web3 = await getWeb3();
  console.log("Version de web3 en la dependencia dev: " + this.web3.version);

  var account = (await this.web3.eth.getAccounts())[0];
  console.log("Cuenta 0: " + account);


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

 

  // var init = () => {
  //   web3Service.getAccounts().then(function(accs) {
  //     $scope.accounts = accs;
  //   }, function(err) {
  //     console.log(err);
  //   });
  // };

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
    
    notify(candidato);

  }

  // angular.element(document).ready(function() {
  //   init();
  // });

}]);

myApp.factory('notify', ['$window', function(win) {
  
  return function(msg) {
      // web3 = await getWeb3();
      win.alert("Se ha realizado un voto al candidato/a: " + msg.name);
      // var account = (await this.web3.eth.getAccounts())[0];
      // console.log(account);
  }

}]);

// myApp.factory