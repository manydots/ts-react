var config = require('./config/webpack.base.config');
module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        var CleanWebpackPlugin = require('clean-webpack-plugin');
        require('./build');
        config.plugins.push(new CleanWebpackPlugin())
    } else if (argv.mode === 'development') {

    };
    //console.log(config.output)
    return config;
}