module.exports = {
    name: "Mattr",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkqBXF5EGQaawhFdRMLftMGWpYw8dhurowTtmWQNEcZ2md",
            endpoint: "https://platform.interop.mattrlabs.io/vc-http-api/v1/credentials",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkqBXF5EGQaawhFdRMLftMGWpYw8dhurowTtmWQNEcZ2md#z6MkqBXF5EGQaawhFdRMLftMGWpYw8dhurowTtmWQNEcZ2md"
            },
            credentialStatusesSupported: [ "RevocationList2020Status" ]
        },
        {
            id: "did:key:zUC72trFXko7eccfAeLJHQwJT7wjVuTkfjbTfmDsLfyQEevrQtrWAe3pvc63xH2LsxbqpBAi6T4fdEpfQMmLDL148zZaY6eEbTmK2SaEQsvvQppas93pXs1GgazkSgemnGTWbWJ",
            endpoint: "https://platform.interop.mattrlabs.io/vc-http-api/v1/credentials",
            proofType: "BbsBlsSignature2020",
            options: {
                assertionMethod: "did:key:zUC72trFXko7eccfAeLJHQwJT7wjVuTkfjbTfmDsLfyQEevrQtrWAe3pvc63xH2LsxbqpBAi6T4fdEpfQMmLDL148zZaY6eEbTmK2SaEQsvvQppas93pXs1GgazkSgemnGTWbWJ#zUC72trFXko7eccfAeLJHQwJT7wjVuTkfjbTfmDsLfyQEevrQtrWAe3pvc63xH2LsxbqpBAi6T4fdEpfQMmLDL148zZaY6eEbTmK2SaEQsvvQppas93pXs1GgazkSgemnGTWbWJ"
            },
            credentialStatusesSupported: [ "RevocationList2020Status" ]
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://platform.interop.mattrlabs.io/vc-http-api/v1/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:web:", "did:v1:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018", "BbsBlsSignature2020", "BbsBlsSignatureProof2020" ],
        credentialStatusesSupported: [ "RevocationList2020Status" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://platform.interop.mattrlabs.io/vc-http-api/v1/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: verifiableCredentials = require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};