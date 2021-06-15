const axios = require('axios');

module.exports = {
  name: 'Transmute',
  getHeaders: async () => {
    // Get oauth2 access token using client_credentials flow
    console.log('lol', process.env.TRANSMUTE_CLIENT_ID);
    const data = {
      client_id: process.env.TRANSMUTE_CLIENT_ID,
      client_secret: process.env.TRANSMUTE_CLIENT_SECRET,
      audience: process.env.TRANSMUTE_AUDIENCE,
      grant_type: 'client_credentials',
    };
    const auth0Domain = process.env.TRANSMUTE_DOMAIN;
    const oauthResponse = await axios({
      method: 'POST',
      url: `https://${auth0Domain}/oauth/token`,
      headers: {
        'content-type': 'application/json',
      },
      data,
    });
    const accessToken = oauthResponse.data.access_token;
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
  },
  credentials: require('../__fixtures__/credentials'),
  verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
  verifiablePresentations: require('../__fixtures__/verifiablePresentations'),
};
