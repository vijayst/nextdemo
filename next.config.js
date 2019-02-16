const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    cssModules: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/services': { page: '/services' },
            '/services/react-app': {
                page: '/service',
                query: {
                    slug: 'react-app'
                }
            },
            '/services/react-native-app': {
                page: '/service',
                query: {
                    slug: 'react-native-app'
                }
            },
            '/services/nextjs-app': {
                page: '/service',
                query: {
                    slug: 'nextjs-app'
                }
            },
            '/services/gatsby-app': {
                page: '/service',
                query: {
                    slug: 'gatsby-app'
                }
            }
        };
    },
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    }
});
