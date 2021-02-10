module.exports = {
    name: "SecureKey",
    issueCredentialConfiguration: [
        {
            id: "did:trustbloc:testnet.trustbloc.dev:EiBtYHD1_ybxr9icxKxCWhOL7G1UoygLEJ2mXVznkrlBEA",
            endpoint: "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential",
            options: {
                assertionMethod: "did:trustbloc:testnet.trustbloc.dev:EiBtYHD1_ybxr9icxKxCWhOL7G1UoygLEJ2mXVznkrlBEA#IhhisIjDfhneDSa_7f3H"
            }
        },
        {
            id: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
            endpoint: "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential",
            options: {
                assertionMethod: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://verifier.sandbox.trustbloc.dev/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:web:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://verifier.sandbox.trustbloc.dev/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};