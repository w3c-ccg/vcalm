module.exports = {
    name: "Trybe.ID",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkgHxqyP3Y8ag2fRpJHZwxwecGFm21usgUyvjfZdfEabdW",
            endpoint: "https://api.dev.trybe.id/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkgHxqyP3Y8ag2fRpJHZwxwecGFm21usgUyvjfZdfEabdW#z6MkgHxqyP3Y8ag2fRpJHZwxwecGFm21usgUyvjfZdfEabdW"
            }
        },
        {
            id: "did:key:z6MkhEW14uEk4WMhAtSKk34Sd3ZUwfwvycThYy1maBZmBb7y",
            endpoint: "https://api.dev.trybe.id/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkhEW14uEk4WMhAtSKk34Sd3ZUwfwvycThYy1maBZmBb7y#z6MkhEW14uEk4WMhAtSKk34Sd3ZUwfwvycThYy1maBZmBb7y"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://api.dev.trybe.id/credentials/verify",
        didMethodsSupported: [ "did:key:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://api.dev.trybe.id/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};