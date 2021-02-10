module.exports = {
    name: "Digital Bazaar",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o",
            endpoint: "https://issuer.interop.digitalbazaar.com/credentials/did%3Akey%3Az6MkkHSTSr9DSNLoioiVEZq8RKm9Sn1Xs4SjZXgzQASBMdc3/issueCredential",
            options: {
                assertionMethod: "did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o#z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://verifier.interop.digitalbazaar.com/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:v1:test:nym:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://verifier.interop.digitalbazaar.com/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};