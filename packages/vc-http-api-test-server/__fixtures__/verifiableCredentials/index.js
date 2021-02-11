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
        proof: item.proof,
        data: item
    };
});