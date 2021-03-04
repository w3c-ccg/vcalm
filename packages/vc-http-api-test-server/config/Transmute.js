module.exports = {
  name: "Transmute",
  issueCredentialConfiguration: [
    {
      id: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
      endpoint: "https://vc.transmute.world/next/credentials/issue",
      proofType: "Ed25519Signature2018",
      options: {
        assertionMethod:
          "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
      },
    },
  ],
  verifyCredentialConfiguration: {
    endpoint: "https://vc.transmute.world/next/credentials/verify",
    didMethodsSupported: ["did:key:", "did:web:"],
    linkedDataProofSuitesSupported: ["Ed25519Signature2018"],
  },
  verifyPresentationConfiguration: {
    endpoint: "https://vc.transmute.world/next/presentations/verify",
  },
  credentials: require("../__fixtures__/credentials"),
  verifiableCredentials: require("../__fixtures__/verifiableCredentials"),
  verifiablePresentations: require("../__fixtures__/verifiablePresentations"),
};
