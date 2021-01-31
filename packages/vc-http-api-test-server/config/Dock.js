module.exports = {
    name: "Dock",
    issueCredentialConfiguration: [
        {
            id: "did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN",
            endpoint: "https://vcapi.dock.io/credentials/issueCredential",
            options: {
                assertionMethod: "did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN#keys-1"
            }
        },
        {
            id: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
            endpoint: "https://vcapi.dock.io/credentials/issueCredential",
            options: {
                assertionMethod: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd"
            }
        },
        {
            id: "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg",
            endpoint: "https://vcapi.dock.io/credentials/issueCredential",
            options: {
                assertionMethod: "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg#xqc3gS1gz1vch7R3RvNebWMjLvBOY-n_14feCYRPsUo"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://vcapi.dock.io/verifier/credentials",
        didMethodsSupported: [ "did:key:", "did:web:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://vcapi.dock.io/verifier/presentations"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};