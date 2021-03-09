module.exports = {
  name: 'Spherity',
  issueCredentialConfiguration: [
      {
          id: "did:key:z6MkkvPAU8JWm65ktjSBjtGkdhAb1q71C255Dyq1A53CSQUF",
          endpoint: "https://cbp-qa.api.wallet.spherity.io/api/v1/credential/issue",
          proofType: "Ed25519Signature2018",
          options: {
              assertionMethod:
                 "did:key:z6MkkvPAU8JWm65ktjSBjtGkdhAb1q71C255Dyq1A53CSQUF#z6MkkvPAU8JWm65ktjSBjtGkdhAb1q71C255Dyq1A53CSQUF"
          }
      },
      {
          id: "did:web:amazon-qa.wallet.spherity.io",
          endpoint: "https://amazon-qa.api.wallet.spherity.io/api/v1/credential/issue",
          proofType: "Ed25519Signature2018",
          options: {
              assertionMethod: 
                "did:web:amazon-qa.wallet.spherity.io#z6MkpcgzRs3WffbyDs5NPwuEskwfJeTAsJmNBQBjJHHtK8ys"
          }
      },
  ],
  verifyCredentialConfiguration: {
      endpoint: "https://amazon-qa.api.wallet.spherity.io/api/v1/credential/verify",
      didMethodsSupported: [ "did:key:", "did:web:" ],
      linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
  },
  verifyPresentationConfiguration: {
      endpoint: "https://amazon-qa.api.wallet.spherity.io/api/v1/presentation/verify",
  },
  credentials: require('../__fixtures__/credentials'),
  verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
  verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
