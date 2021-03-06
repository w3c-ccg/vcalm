module.exports = {
  name: "mesur.io",
  issueCredentialConfiguration: [
    {
      id: "did:key:z6Mki93tJ2rwrDaWTMZcdMShk4xLWf75Fu559dAapKe8pdmX#z6Mki93tJ2rwrDaWTMZcdMShk4xLWf75Fu559dAapKe8pdmX",
      endpoint: "http://vc.mesur.io:8080/next/credentials/issue",
      proofType: "Ed25519Signature2018",
      options: {
        assertionMethod:
          "did:key:z6Mki93tJ2rwrDaWTMZcdMShk4xLWf75Fu559dAapKe8pdmX#z6Mki93tJ2rwrDaWTMZcdMShk4xLWf75Fu559dAapKe8pdmX",
      },
    },
  ],
  verifyCredentialConfiguration: {
    endpoint: "http://vc.mesur.io:8080/next/credentials/verify",
    didMethodsSupported: ["did:key:", "did:web:"],
    linkedDataProofSuitesSupported: ["Ed25519Signature2018"],
  },
  verifyPresentationConfiguration: {
    endpoint: "http://vc.mesur.io:8080/next/presentations/verify",
  },
  credentials: require("../__fixtures__/credentials"),
  verifiableCredentials: require("../__fixtures__/verifiableCredentials"),
  verifiablePresentations: require("../__fixtures__/verifiablePresentations"),
};
