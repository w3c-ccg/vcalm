module.exports = {
    name: 'Spherity',
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkjafApNWaUm4n7WHqYdjDwsjhKbZQi54LwPDb8U8fQAT9",
            endpoint: "https://marketplace-amazon-pre-prod.api.wallet.eu.spherity.io/api/v1/vc-http-api/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod:
                   "did:key:z6MkjafApNWaUm4n7WHqYdjDwsjhKbZQi54LwPDb8U8fQAT9#z6MkjafApNWaUm4n7WHqYdjDwsjhKbZQi54LwPDb8U8fQAT9"
            },
            credentialStatusesSupported: ['RevocationList2020Status']
        },
        {
            id: "did:key:z6MkjafApNWaUm4n7WHqYdjDwsjhKbZQi54LwPDb8U8fQAT9",
            endpoint: "https://cbp-pre-prod.api.wallet.eu.spherity.io/api/v1/vc-http-api/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: 
                  "did:key:z6MkemYya9bX1csgVvcjEaeLwSYufjnbe7746S4rsMfq3D2E#z6MkemYya9bX1csgVvcjEaeLwSYufjnbe7746S4rsMfq3D2E"
            },
            credentialStatusesSupported: ['RevocationList2020Status']
        },
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://cbp-pre-prod.api.wallet.eu.spherity.io/api/v1/vc-http-api/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:web:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ],
    },
    verifyPresentationConfiguration: {
        endpoint: "https://cbp-pre-prod.api.wallet.eu.spherity.io/api/v1/vc-http-api/presentations/verify",
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
