// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/lwc-create-app/blob/master/packages/lwc-services/example/lwc-services.config.js
// eslint-disable-next-line no-undef
module.exports = {
    resources: [
        { from: 'src/resources', to: 'dist/resources' },
        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: 'dist/resources/slds'
        }
    ]
};
