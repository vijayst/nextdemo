const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    cssModules: true,
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    }
});
