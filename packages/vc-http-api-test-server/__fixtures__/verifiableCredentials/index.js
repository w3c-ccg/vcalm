module.exports = [
    {
        name: "Permanent Residency Card",
        issuerDidMethod: "did:key:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-1.json')
    },
    {
        name: "University Degree",
        issuerDidMethod: "did:key:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-2.json')
    },
    {
        name: "Permanent Residency Card",
        issuerDidMethod: "did:sov:danube:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-3.json')
    },
    {
        name: "University Degree",
        issuerDidMethod: "did:v1:test:nym:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-4.json')
    },
    {
        name: "Permanent Residency Card",
        issuerDidMethod: "did:web:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-5.json')
    },
    {
        name: "Bill Of Lading",
        issuerDidMethod: "did:v1:test:nym:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-6.json')
    },
    {
        name: "Crude Inspection",
        issuerDidMethod: "did:v1:test:nym:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-7.json')
    },
    {
        name: "Crude Product",
        issuerDidMethod: "did:key:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-8.json')
    },
    {
        name: "QP In Bond",
        issuerDidMethod: "did:v1:test:nym:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-9.json')
    },
    {
        name: "Permanent Residency Card",
        issuerDidMethod: "did:sov:staging:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-10.json')
    },
    {
        name: "Permanent Residency Card",
        issuerDidMethod: "did:v1:test:nym:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-11.json')
    },
    {
        name: "Certified Mill Test Report",
        issuerDidMethod: "did:v1:test:nym:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-12.json')
    },
    {
        name: "Certified Mill Test Report",
        issuerDidMethod: "did:elem:ropsten:",
        linkedDataProofSuite: "Ed25519Signature2018",
        data: require('./case-13.json')
    }
]