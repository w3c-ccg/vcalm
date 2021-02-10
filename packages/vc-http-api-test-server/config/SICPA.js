module.exports = {
    name: "SICPA",
    issueCredentialConfiguration: [
        {
            id: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A",
            endpoint: "https://svip-interop.ocs-support.com/api/credentials/issueCredential",
            options: {
                assertionMethod: "did:sov:staging:PiEVD2uU2qKEQ5oxx1BJ6A#key-1"
            }
        },
        {
            id: "did:key:z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN",
            endpoint: "https://svip-interop.ocs-support.com/api/credentials/issueCredential",
            options: {
                assertionMethod: "did:key:z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN#z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://svip-interop.ocs-support.com/api/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:sov:staging:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://svip-interop.ocs-support.com/api/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};