const fetch = require('node-fetch');

module.exports = {
  name: 'Transmute',
  getHeaders: async () => {
    // Get oauth2 access token using client_credentials flow
    const data = {
      client_id: process.env.TRANSMUTE_CLIENT_ID,
      client_secret: process.env.TRANSMUTE_CLIENT_SECRET,
      audience: process.env.TRANSMUTE_AUDIENCE,
      grant_type: 'client_credentials',
    };
    const oauthResponse = await fetch(
      `https://${process.env.TRANSMUTE_DOMAIN}/oauth/token`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then(res => res.json());
    const accessToken = oauthResponse.access_token;
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  },
  getQueryParams: async () => {
    return {
      role: 'https://staging.platform.transmute.industries/organizations/eaff306f-2591-4d02-a08c-410574e9c861/admin',
    };
  },
  issueCredentialConfiguration: [
    {
      id: 'did:key:z6Mknv9euBSQrKXBCsTrr7sYdqMiGbeKgUCWvM5SMxQWgn7w',
      endpoint:
        'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/credentials/issue',
      proofType: 'Ed25519Signature2018',
      options: {
        assertionMethod:
          'did:key:z6Mknv9euBSQrKXBCsTrr7sYdqMiGbeKgUCWvM5SMxQWgn7w#z6Mknv9euBSQrKXBCsTrr7sYdqMiGbeKgUCWvM5SMxQWgn7w',
      },
    },
  ],
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
  notifyPresentationConfiguration: {
    endpoint:
      'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/available',
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/available",
  },
  submitPresentationConfiguration: {
    endpoint:
      'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/submissions',
    // endpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/submissions",
    proveEndpoint:
      'https://staging.platform.transmute.industries/v1/organizations/eaff306f-2591-4d02-a08c-410574e9c861/presentations/prove?role=https://staging.platform.transmute.industries/organizations/eaff306f-2591-4d02-a08c-410574e9c861/admin',
    // proveEndpoint: "http://localhost:8080/v1/organizations/52628a04-cc54-4570-9940-36133d606ab6/presentations/prove?role=http://localhost:8080/organizations/52628a04-cc54-4570-9940-36133d606ab6/admin",
  },
  authentication: {
    endpoint: `https://${process.env.TRANSMUTE_DOMAIN}/oauth/token`,
    request: {
      client_id: process.env.TRANSMUTE_CLIENT_ID,
      client_secret: process.env.TRANSMUTE_CLIENT_SECRET,
      audience: process.env.TRANSMUTE_AUDIENCE,
      grant_type: 'client_credentials',
    },
  },
  credentials: require('../__fixtures__/credentials'),
  verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
  verifiablePresentations: require('../__fixtures__/verifiablePresentations'),
};
