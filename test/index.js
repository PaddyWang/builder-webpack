const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('builder-webpack tese case', () => {
    require('./unit/webpack-base-test');
});
