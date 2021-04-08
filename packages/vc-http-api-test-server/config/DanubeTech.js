module.exports = {
    name: "Danube Tech",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MkvfambyLsugwe8DCHeUGVJbYZyKne59RDHx2dqmXRG6nB",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MkvfambyLsugwe8DCHeUGVJbYZyKne59RDHx2dqmXRG6nB#z6MkvfambyLsugwe8DCHeUGVJbYZyKne59RDHx2dqmXRG6nB"
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
            id: "did:v1:test:nym:z6MkkGibPh9yV4X3Gt47oRsn1wpscmPjYjSgr3mmJTRvUenC",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:v1:test:nym:z6MkkGibPh9yV4X3Gt47oRsn1wpscmPjYjSgr3mmJTRvUenC#z6MkkGibPh9yV4X3Gt47oRsn1wpscmPjYjSgr3mmJTRvUenC"
            }
        },
        {
            id: "did:web:did-web.uniregistrar.io:uscis",
            endpoint: "https://uniissuer.io/1.0/credentials/issue",
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:web:did-web.uniregistrar.io:uscis#z6Mkpg9GarVada9ycNVnYEKG7kNyh7QTYy4Znu6Kyoi2ZseG"
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
