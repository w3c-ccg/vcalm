const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const filterVerifiableCredentialsForVendorConfig = (verifiableCredentials, config) =>
  verifiableCredentials.filter(item =>
    checkVerifiableCredentialIssuerDidMethod(item, config.didMethodsSupported) &&
    checkVerifiableCredentialLinkedDataProofType(item, config.linkedDataProofSuitesSupported) &&
    (!item.credentialStatusTypes || !config.credentialStatusesSupported || checkVerifiableCredentialCredentialStatus(item, config.credentialStatusesSupported))
  );

const checkVerifiableCredentialLinkedDataProofType = (element, supportedProofTypes) => supportedProofTypes.some(proofType => element.proofType === proofType);

const checkVerifiableCredentialIssuerDidMethod = (element, supportedDidMethods) => supportedDidMethods.some(didMethod => element.issuerDidMethod.startsWith(didMethod));

const checkVerifiableCredentialCredentialStatus = (element, supportCredentialStatuses) => supportCredentialStatuses.some(credentialStatus => element.credentialStatusTypes && element.credentialStatusTypes.includes(credentialStatus));

const filterVerifiableCredentialsByLinkedDataProofType = (verifiableCredentials, proofTypes) =>
  verifiableCredentials.filter(item => checkVerifiableCredentialLinkedDataProofType(item, proofType));

const filterVerifiableCredentialsByDidMethods = (verifiableCredentials, didMethods) => 
  verifiableCredentials.filter(item => checkVerifiableCredentialIssuerDidMethod(item, didMethods));

const filterVerifiableCredentialsWithCredentialStatus = (verifiableCredentials) => 
  verifiableCredentials.filter(item => item.credentialStatusTypes);

module.exports = {
  cloneObj,
  filterVerifiableCredentialsByLinkedDataProofType,
  filterVerifiableCredentialsByDidMethods,
  filterVerifiableCredentialsWithCredentialStatus,
  filterVerifiableCredentialsForVendorConfig
};
