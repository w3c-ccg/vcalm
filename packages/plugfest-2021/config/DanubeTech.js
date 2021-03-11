module.exports = {
    name: "Danube Tech",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkkXNmybrz4A1oh39GdxNNDDDPgCcmbrrStGWPGBAdcuj1",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkkXNmybrz4A1oh39GdxNNDDDPgCcmbrrStGWPGBAdcuj1#z6MkkXNmybrz4A1oh39GdxNNDDDPgCcmbrrStGWPGBAdcuj1"
            }
        },
        {
            id: "did:sov:danube:MQ5WYVUsciSd55zXMgYWpM",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:sov:danube:MQ5WYVUsciSd55zXMgYWpM#key-1"
            }
        },
        {
            id: "did:v1:test:nym:z6MkfYYEh6Pe46bXWYfQhxGmyfFFTcCDDGCGwxZwYbbfCTvX",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:v1:test:nym:z6MkfYYEh6Pe46bXWYfQhxGmyfFFTcCDDGCGwxZwYbbfCTvX#z6MkuYijtKV75Zx1BmYpt18EctKEqf5odWSY5hJNNpWSeiVu"
            }
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: "https://univerifier.io/1.0/credentials/verify",
        didMethodsSupported: [ "did:key:", "did:sov:", "did:v1:test:nym:", "did:web:", "did:ion:", "did:btcr:" ],
        linkedDataProofSuitesSupported: [ "Ed25519Signature2018" ]
    },
    verifyPresentationConfiguration: {
        endpoint: "https://univerifier.io/1.0/presentations/verify"
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: verifiableCredentials = require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
