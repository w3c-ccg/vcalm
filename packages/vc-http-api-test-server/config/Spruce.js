module.exports = {
    name: "Spruce",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkhL2wNXYZ8pSf4ctHPotrpkWggeb6ipCWYaPfDhaQ1NLM",
            endpoint: "https://demo.spruceid.com/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkhL2wNXYZ8pSf4ctHPotrpkWggeb6ipCWYaPfDhaQ1NLM#z6MkhL2wNXYZ8pSf4ctHPotrpkWggeb6ipCWYaPfDhaQ1NLM"
            },
            credentialStatusesSupported: []
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://demo.spruceid.com/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:web:", "did:tz:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ],
        credentialStatusesSupported: []
    },
    verifyPresentationConfiguration: {
        endpoint: "https://demo.spruceid.com/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
