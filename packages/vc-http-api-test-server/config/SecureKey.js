module.exports = {
    name: "SecureKey",
    issueCredentialConfiguration: [
        {
            id: "did:trustbloc:testnet.trustbloc.dev:EiA93NYbmVnRB0vdlwYMijSoHDQL21QRo8bWCJ_h7rglGA",
            endpoint: "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:trustbloc:testnet.trustbloc.dev:EiA93NYbmVnRB0vdlwYMijSoHDQL21QRo8bWCJ_h7rglGA#9b0aeZejuz3IFsDekhICFlGCBuN1HPsvYAVc-Yytw1s"
            },
            credentialStatusesSupported: ['RevocationList2020Status']
        },
        {
            id: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
            endpoint: "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd"
            },
            credentialStatusesSupported: ['RevocationList2020Status']
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://verifier.sandbox.trustbloc.dev/vc-verifier-interop/verifier/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:web:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018","BbsBlsSignatureProof2020"],
        credentialStatusesSupported: [ "RevocationList2020Status"]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://verifier.sandbox.trustbloc.dev/vc-verifier-interop/verifier/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
