import 'bootstrap-css-only';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import getWeb3 from './app.getWeb3';
import VotacionContract from "./votacion";
import { votacionService } from "./votacionService";


const myApp = angular.module('app', [ComponentsModule.name]).component('app', appComponent);

// myApp.constant('web3', getWeb3());

myApp.controller('controlVote', ['$scope', async function($scope) {
  // let voteCarol = 0 , voteMario = 0 , voteLeo = 0 , VoteJoa = 0;
  let account = undefined;

  $scope.candidates = [
    {name : "Carolina"},
    {name : "Mario"},
    {name : "Leonardo"},
    {name : "Joaquin"}
  ];

  $scope.Carolina = 0;
  $scope.Mario = 0;
  $scope.Leonardo = 0;
  $scope.Joaquin = 0;


    let web3 = await getWeb3();
    // console.log(this.web3.version);
    let votacion = await VotacionContract(web3.currentProvider);

  account = (await web3.eth.getAccounts())[0];
  console.log("Cuenta 0 es: " + account);

  // funciona
  // await this.votacion.voteForCandidate(this.web3.utils.asciiToHex('Carolina'), {from: account, value: this.web3.utils.toWei('2', 'ether')});
  
  $scope.Carolina = (await votacion.totalVotesFor(web3.utils.asciiToHex('Carolina'), {from: account})).toNumber();
  $scope.Mario = (await votacion.totalVotesFor(web3.utils.asciiToHex('Mario'), {from: account})).toNumber();
  $scope.Leonardo = (await votacion.totalVotesFor(web3.utils.asciiToHex('Leonardo'), {from: account})).toNumber();
  $scope.Joaquin = (await votacion.totalVotesFor(web3.utils.asciiToHex('Joaquin'), {from: account})).toNumber();
  $scope.$apply();

  $scope.Guardar = async function(candidato) {

    console.log("estoy en el control votar");
    console.log("Candidato elegido: " + candidato.name);
    
    // Estoy invocando el método votar candidato del contrato
    await votacion.voteForCandidate(web3.utils.asciiToHex(candidato.name), {from: account, value: web3.utils.toWei('1', 'ether')});

    //Llamo le método votos total del candidato seleccionado
    $scope.Carolina = (await votacion.totalVotesFor(web3.utils.asciiToHex('Carolina'), {from: account})).toNumber();
    $scope.Mario = (await votacion.totalVotesFor(web3.utils.asciiToHex('Mario'), {from: account})).toNumber();
    $scope.Leonardo = (await votacion.totalVotesFor(web3.utils.asciiToHex('Leonardo'), {from: account})).toNumber();
    $scope.Joaquin = (await votacion.totalVotesFor(web3.utils.asciiToHex('Joaquin'), {from: account})).toNumber();

    // $scope.candidates.name = (await votacion.totalVotesFor(web3.utils.asciiToHex(candidato.name), {from: account})).toNumber();

    $scope.$apply();

    // switch(candidato.name) {
    //   case 'Carolina':
    //     voteCarol += 1;
    //     break;
    //   case "Mario":
    //     voteMario += 1;
    //     break;
    //   case "Leonardo":
    //     voteLeo += 1;
    //     break;
    //   case "Joaquin":
    //     VoteJoa += 1;
    //     break;
    //   default:
    //     console.log("not choose in one case");
    // }

    // $scope.Carolina = voteCarol;
    // $scope.Mario = voteMario;
    // $scope.Leonardo = voteLeo;
    // $scope.Joaquin = VoteJoa;
    
    // notify(candidato);

  }


}]);



myApp.factory('notify', ['$window', async function(win) {

}]);

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