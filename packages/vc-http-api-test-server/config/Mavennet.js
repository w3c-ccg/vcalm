module.exports = {
    name: "Mavennet",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b",
            endpoint: "https://api.neo-flow.com/credentials/issueCredential",
            options: {
                assertionMethod: "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b#z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b"
            }
        },
        {
            id: "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J",
            endpoint: "https://api.neo-flow.com/credentials/issueCredential",
            options: {
                assertionMethod: "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J#z6MkqfvdBsFw4QdGrZrnx7L1EKfY5zh9tT4gumUGsMMEZHY3"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://api.neo-flow.com/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:v1:test:nym:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://api.neo-flow.com/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};