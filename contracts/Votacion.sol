pragma solidity ^0.5.8;

contract Votacion {
  address owner;
  mapping (bytes32 => uint8) public votesReceived;
  bytes32[] public candidateList;
  // bytes32 public candidateList;

  constructor(bytes32[] memory candidateNames) public {
    owner = msg.sender;
    candidateList = candidateNames;
    // for(uint i = 0 ; i < candidateNames.length; i++)
    //   candidateList.push(candidateNames[i]);
  }

 //es byte y no string porque sino tengo que hacer una conversion y eso consume más gas
  function totalVotesFor(bytes32 candidate) public view returns (uint8) {
    require(validCandidate(candidate), "Some Error");
    return votesReceived[candidate];
  }

  function voteForCandidate(bytes32 candidate) public {
    require(validCandidate(candidate), "Some Error");
    votesReceived[candidate] += 1;
  }

 //esta funcion no modifica nada de la blockchain no puedo editar nada o sino no es VIEW
  function validCandidate(bytes32 candidate) public view returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }

  function getTotalCandidatesList() public view returns (uint) {
    return candidateList.length;
  }

}

//se puede hacer una mejora en el array candidateList por uno din�mico para agergar m�s candidatos
