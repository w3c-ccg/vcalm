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
    {
      id:
        "did:key:z5TcF9K5jTimwCWUpfkkPzdvF9xSPjRcvdMqeYWy6grZhbm8CoAdR1vos6rQzrLjm1oCjD7hoxknNk2BMrpoC8iUpAZswGm2BrkoxsNUqVFtfoNBdCtFCXduzeYZZDs5sJzdsgktZzPRfRLRGnwCV4trjYqpRZa4TYQeWG2e6HqpLynmcx3SJLuEZ2YnCdJHznRA3Ayyt",
      endpoint: "https://vc.transmute.world/next/credentials/issue",
      proofType: "BbsBlsSignature2020",
      options: {
        assertionMethod:
          "did:key:z5TcF9K5jTimwCWUpfkkPzdvF9xSPjRcvdMqeYWy6grZhbm8CoAdR1vos6rQzrLjm1oCjD7hoxknNk2BMrpoC8iUpAZswGm2BrkoxsNUqVFtfoNBdCtFCXduzeYZZDs5sJzdsgktZzPRfRLRGnwCV4trjYqpRZa4TYQeWG2e6HqpLynmcx3SJLuEZ2YnCdJHznRA3Ayyt#zUC75ReHuHnjbU5w4XNgrU13ZR6GN1JxVVwWyNkijuvG49A19Bg7XMqQhNoYZjB7v9nRdZfNqJcusvkhvUZjK4FoikAdRUjgF9Komr6XwfLjDfhgenBTHxfhM85d7z5rJRcKnZQ",
      },
    },
  ],
  verifyCredentialConfiguration: {
    // endpoint: "https://vc.transmute.world/next/credentials/verify",
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/credentials/verify",
    endpoint: "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/credentials/verify",
    didMethodsSupported: ["did:key:"],
    linkedDataProofSuitesSupported: [
      "Ed25519Signature2018",
      "BbsBlsSignature2020",
      "BbsBlsSignatureProof2020",
    ],
  },
  verifyPresentationConfiguration: {
    // endpoint: "https://vc.transmute.world/next/presentations/verify",
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/verify",
    endpoint: "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/verify",
    didMethodsSupported: ["did:key:"],
    linkedDataProofSuitesSupported: [
      "Ed25519Signature2018",
      "BbsBlsSignature2020",
      "BbsBlsSignatureProof2020",
    ],
  },
  notifyPresentationConfiguration: {
    endpoint: "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/available",
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/available",
  },
  submitPresentationConfiguration: {
    endpoint: "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/submissions",
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/submissions",
    proveEndpoint: "https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/prove?role=https://staging.platform.transmute.industries/organizations/eaff306f-2591-4d02-a08c-410574e9c861/admin",
    // proveEndpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/prove?role=http://localhost:8080/organizations/52628a04-cc54-4570-9940-36133d606ab6/admin",
  },
  credentials: require("../__fixtures__/credentials"),
  verifiableCredentials: require("../__fixtures__/verifiableCredentials"),
  verifiablePresentations: require("../__fixtures__/verifiablePresentations"),
  authentication: {
    endpoint: "https://transmute-industries.auth0.com/oauth/token",
    request: {
      client_id: process.env.TRANSMUTE_CLIENT_ID,
      client_secret: process.env.TRANSMUTE_CLIENT_SECRET,
      audience: "https://staging.platform.transmute.industries",
      grant_type: "client_credentials"
    }
  }
};
