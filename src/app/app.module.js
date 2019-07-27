import 'bootstrap-css-only';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import getWeb3 from './app.getWeb3';
import VotacionContract from "./votacion";


const myApp = angular.module('app', [ComponentsModule.name]).component('app', appComponent);

myApp.controller('controlVote', ['$scope' ,'notify', async function($scope, notify) {
  let voteCarol = 0 , voteMario = 0 , voteLeo = 0 , VoteJoa = 0;
  let account = undefined;

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

  this.web3 = await getWeb3();
  console.log("Version de web3 en la dependencia dev: " + this.web3.version);
  this.votacion = await VotacionContract(this.web3.currentProvider);
  console.log(this.votacion.voteForCandidate);

  account = (await this.web3.eth.getAccounts())[0];
  console.log("Cuenta 0: " + account);

  await this.votacion.voteForCandidate(this.web3.utils.asciiToHex('Carolina'), {from: account, value: this.web3.utils.toWei('2', 'ether')});
  

  $scope.Guardar = async function(candidato) {

    console.log("estoy en el control votar");
    console.log("Candidato elegido: " + candidato.name);

    // await this.votacion.voteForCandidate(web3.utils.asciiToHex(candidato), account)
    // debo realizar un servicio


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


}]);

myApp.factory('notify', ['$window', function(win) {
  
  return function(msg) {
      // web3 = await getWeb3();
      win.alert("Se ha realizado un voto al candidato/a: " + msg.name);
      // var account = (await this.web3.eth.getAccounts())[0];
      // console.log(account);
  }

}]);

// myApp.service('serviceVotacion', ['constructor', async function(VotacionContract) {

//   this.votarCandidato = await VotacionContract.voteForCandidate(candidate, { from, value });
//     console.log("estoy en el factory serviceVotacion");;
//   }

// ]);

// myApp.factory

 // var init = () => {
  //   web3Service.getAccounts().then(function(accs) {
  //     $scope.accounts = accs;
  //   }, function(err) {
  //     console.log(err);
  //   });
  // };

    // angular.element(document).ready(function() {
  //   init();
  // });