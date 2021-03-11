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
        data: fixtures[item]
    };
});