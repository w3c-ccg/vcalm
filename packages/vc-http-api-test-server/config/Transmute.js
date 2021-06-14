module.exports = {
  name: 'Transmute',
  getHeaders: async () => {
    return {
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FRkROek5CTUVKQ00wRkVSalEyUXpjM05qZ3hSVU14TmpJd016VXdRMEUwT0RBME5USXhRZyJ9.eyJpc3MiOiJodHRwczovL3RyYW5zbXV0ZS1pbmR1c3RyaWVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MGI5MDk1ODZhY2FiZjAwNjliMzcwYmUiLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaHR0cHM6Ly90cmFuc211dGUtaW5kdXN0cmllcy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjIzNjc5Njk2LCJleHAiOjE2MjM3NjYwOTYsImF6cCI6IkVxeDJPRWtWRDk5ak0xdVdqdkJmV2xFODNma1lTOHNUIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyJ9.H1MtQ-Y_4-5FTZ-8IkKIWtI6zEvql1IcRVNZax4HzU3a0LZNUx3hI8DyiNB31QIsb2DzUsQuFfz4q2yUVy858RLIwu3mlQdJ720ZNzKu5GM3amRMSYR5nUFztsLX6dMzf-DGOSQL3nKwyb-Lkh9xs3u8D6XtaWCknN7NtfE6nz4h44PZWfNo8oU30F6ZWJIoFPl8ndgExC4OaN4Nr1udvTATCjxSpOqXXqRxaO0b15TpEey10xH2t9q90aZ9aCaNcTACY049CbT5tj4e00umuxy6EkQNy9lasZmPaOkgBsacIvCY4DkFpyRvCXHunelJp5VYxFw7ygwFrgZ0Q0GXdg',
    };
  },
  getQueryParams: async () => {
    return {
      role: 'http://localhost:8080/organizations/a1664189-094f-4546-a767-fff1602638a3/admin',
    };
  },
  issueCredentialConfiguration: [
    {
      id: 'did:key:z6MkpRgwMo1tSopyz5RZD131SpkZ1tAb5pvZcs76eBe9hQRK',
      endpoint:
        'http://localhost:8080/v1/organizations/a1664189-094f-4546-a767-fff1602638a3/credentials/issue',
      proofType: 'Ed25519Signature2018',
      options: {
        assertionMethod:
          'did:key:z6MkpRgwMo1tSopyz5RZD131SpkZ1tAb5pvZcs76eBe9hQRK#z6MkpRgwMo1tSopyz5RZD131SpkZ1tAb5pvZcs76eBe9hQRK',
      },
    },
  ],
  verifyCredentialConfiguration: {
    // endpoint: "https://vc.transmute.world/next/credentials/verify",
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/credentials/verify",
    endpoint:
      'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/credentials/verify',
    didMethodsSupported: ['did:key:'],
    linkedDataProofSuitesSupported: [
      'Ed25519Signature2018',
      'BbsBlsSignature2020',
      'BbsBlsSignatureProof2020',
    ],
  },
  verifyPresentationConfiguration: {
    // endpoint: "https://vc.transmute.world/next/presentations/verify",
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/verify",
    endpoint:
      'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/verify',
    didMethodsSupported: ['did:key:'],
    linkedDataProofSuitesSupported: [
      'Ed25519Signature2018',
      'BbsBlsSignature2020',
      'BbsBlsSignatureProof2020',
    ],
  },
  credentials: require('../__fixtures__/credentials'),
  verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
  verifiablePresentations: require('../__fixtures__/verifiablePresentations'),
};
