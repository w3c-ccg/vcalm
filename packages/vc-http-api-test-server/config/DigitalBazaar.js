module.exports = {
    name: "Digital Bazaar",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o",
            endpoint: "https://issuer.demo.digitalbazaar.com/credentials/did%3Akey%3Az6MkmDoojMzE8aWK2a926xtVgBXY1GafcpnMSgGVaCdbAr3z/issueCredential",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o#z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o"
            },
            credentialStatusesSupported: ['RevocationList2020Status']
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://verifier.demo.digitalbazaar.com/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:v1:test:nym:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ],
        credentialStatusesSupported: ['RevocationList2020Status']
    },
    verifyPresentationConfiguration: {
        endpoint: "https://verifier.demo.digitalbazaar.com/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
