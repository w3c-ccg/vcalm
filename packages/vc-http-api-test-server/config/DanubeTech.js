module.exports = {
    name: "Danube Tech",
    issueCredentialConfiguration: [
        {
            id: "did:sov:danube:VZoG2R1UneUscisG1eLxJb",
            endpoint: "https://uniissuer.io/api/credentials/issueCredential",
            options: {
                assertionMethod: "did:sov:danube:VZoG2R1UneUscisG1eLxJb#key-1"
            }
        },
        {
            id: "did:v1:test:nym:z6MktyAYL7sVcmPQPTbbMqrnGMNwp6zkvRvKREs94f81fA1K",
            endpoint: "https://uniissuer.io/api/credentials/issueCredential",
            options: {
                assertionMethod: "did:v1:test:nym:z6MktyAYL7sVcmPQPTbbMqrnGMNwp6zkvRvKREs94f81fA1K#z6MkgumSeJ8FGqFjXFPJSsT2EFCNYVvx5RXDQ6oBYDrmtiDb"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://univerifier.io/api/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:sov:danube:", "did:v1:test:nym:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://univerifier.io/api/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: verifiableCredentials = require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};