module.exports = {
    name: "Mavennet",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b",
            endpoint: "https://producer-api.neoflow.ca/v1/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b#z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b"
            }
        },
        {
            id: "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J",
            endpoint: "https://producer-api.neoflow.ca/v1/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J#z6MkqfvdBsFw4QdGrZrnx7L1EKfY5zh9tT4gumUGsMMEZHY3"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://producer-api.neoflow.ca/v1/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:v1:test:nym:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://producer-api.neoflow.ca/v1/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};