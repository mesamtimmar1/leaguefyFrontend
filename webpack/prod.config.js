const baseConfig = require('./base.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
    mode: 'production',
});