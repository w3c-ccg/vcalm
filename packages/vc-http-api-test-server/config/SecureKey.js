module.exports = {
    name: "SecureKey",
    issueCredentialConfiguration: [
        {
            id: "did:trustbloc:testnet.trustbloc.dev:EiAFEDjO4aF0ItSmvK1ehKwtqyZlXExK8l70D6EP-TuF9A",
            endpoint: "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential",
            options: {
                assertionMethod: "did:trustbloc:testnet.trustbloc.dev:EiAFEDjO4aF0ItSmvK1ehKwtqyZlXExK8l70D6EP-TuF9A#cAl-0D3UEU2WOSlDrQXQWG2YQ51QIL6Ho8aeXaVzkfw"
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
