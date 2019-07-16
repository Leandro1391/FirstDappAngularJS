const Votacion = artifacts.require("Votacion");

const b32arr = [web3.utils.asciiToHex('Carolina'), web3.utils.asciiToHex('Mario'), web3.utils.asciiToHex('Leonardo'), web3.utils.asciiToHex('Joaquin')];

module.exports = function(deployer) {
  deployer.deploy(Votacion, b32arr);
};