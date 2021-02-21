const fixtures = require('require-all')({
    dirname: __dirname,
    filter: /.json$/,
    map: function (__, path) {
        return `${path}`;
    }
})

module.exports = Object.values(fixtures).map(item => {
    return {
        name: item.name,
        issuerDidMethod: typeof item.issuer === 'string' ? item.issuer : item.issuer.id,
        credentialStatusTypes: item.credentialStatus ? Array.isArray(item.credentialStatus) ? item.credentialStatus.map(val => val.type) : [ item.credentialStatus.type ]: undefined,
        proof: item.proof,
        data: item
    };
});