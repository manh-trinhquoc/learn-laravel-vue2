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
    }
})

mix.js('resources/js/app.js', 'public/js')
    .styles('resources/css/style.css', 'public/css/style.css')
    .sourceMaps();
