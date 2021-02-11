const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const filterVerifiableCredentialsByDidMethods = (verifiableCredentials, didMethods) => 
  verifiableCredentials.filter(item => didMethods.some(didMethod => item.issuerDidMethod.startsWith(didMethod)));

module.exports = {
  cloneObj,
  filterVerifiableCredentialsByDidMethods
};
