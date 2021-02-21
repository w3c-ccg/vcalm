const verifiableCredentials = require("../__fixtures__/verifiableCredentials");

const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const filterVerifiableCredentialsByDidMethods = (verifiableCredentials, didMethods) => 
  verifiableCredentials.filter(item => didMethods.some(didMethod => item.issuerDidMethod.startsWith(didMethod)));

const filterVerifiableCredentialsWithCredentialStatus = (verifiableCredentials) => 
  verifiableCredentials.filter(item => item.credentialStatusTypes);

module.exports = {
  cloneObj,
  filterVerifiableCredentialsByDidMethods,
  filterVerifiableCredentialsWithCredentialStatus
};
