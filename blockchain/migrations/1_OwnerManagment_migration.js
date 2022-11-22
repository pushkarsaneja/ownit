var OwnerManagment = artifacts.require("OwnerManagment");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(OwnerManagment);
};