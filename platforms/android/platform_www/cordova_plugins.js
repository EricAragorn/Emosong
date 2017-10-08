cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "com.oauthio.plugins.oauthio.OAuth",
        "file": "plugins/com.oauthio.plugins.oauthio/dist/oauth.js",
        "pluginId": "com.oauthio.plugins.oauthio",
        "merges": [
            "OAuth"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-inappbrowser": "1.7.1",
    "com.oauthio.plugins.oauthio": "0.2.4"
};
// BOTTOM OF METADATA
});