module.exports = {
    name: "Factom",
    issueCredentialConfiguration: [
        {
            id: "did:factom:5d0dd58757119dd437c70d92b44fbf86627ee275f0f2146c3d99e441da342d9f",
            endpoint: "https://vc.api.factom.sphereon.com/services/issue/credentials",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:factom:5d0dd58757119dd437c70d92b44fbf86627ee275f0f2146c3d99e441da342d9f#key-0"
            }
        },
        {
            id: "did:v1:test:nym:z6MkvSbsrm44VnhngbyW2rZk2u9bvSPUSmJwqYjMd4RSJT7A",
            endpoint: "https://vc.api.factom.sphereon.com/services/issue/credentials",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:v1:test:nym:z6MkvSbsrm44VnhngbyW2rZk2u9bvSPUSmJwqYjMd4RSJT7A#z6MkjFhRvbXfjmQ8iFHeYh42cNS7v4CtguLzvwZSXcHe8zqy"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://vc.api.factom.sphereon.com/services/verify/credentials",
        didMethodsSupported: [ "did:v1:test:nym:", "did:factom:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://vc.api.factom.sphereon.com/services/verify/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};