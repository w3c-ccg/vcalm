const path = require('path');

const fixtures = require('require-all')({
    dirname: __dirname,
    filter: /.json$/,
    map: function (__, path) {
        return `${path}`;
    }
})

module.exports = Object.keys(fixtures).map(item => {
    return {
        fileName: path.basename(item, '.json'),
        name: fixtures[item].name,
        issuerDidMethod: typeof fixtures[item].issuer === 'string' ? fixtures[item].issuer : fixtures[item].issuer.id,
        credentialStatusTypes: fixtures[item].credentialStatus ? Array.isArray(fixtures[item].credentialStatus) ? fixtures[item].credentialStatus.map(val => val.type) : [ fixtures[item].credentialStatus.type ]: undefined,
        proofType: fixtures[item].proof.type,
        data: fixtures[item]
    };
});