require('dotenv').config();
const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    devtool: 'source-map'

})

mix.js('resources/js/app.js', 'public/js')
    .styles(
        [
            'node_modules/open-sans-all/css/open-sans.css',
            'node_modules/font-awesome/css/font-awesome.css',
            'resources/css/style.css'
        ],
        'public/css/style.css',
        // {
        //     outputStyle: 'compressed',
        //     sourceMap: true,
        //     outFile: './map',
        //     omitSourceMapUrl: true
        // }
    )
    .sourceMaps()
    .copy('node_modules/open-sans-all/fonts', 'public/fonts')
    .copy('node_modules/font-awesome/fonts', 'public/fonts')
    .copy('resources/images', 'public/images')
    .browserSync({
        // proxy: process.env.APP_URL,
        proxy: "http://host.docker.internal:89/",
        open: false,
        port: 8000
    });
