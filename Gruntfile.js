'use strict';
var webpackconfig = require('./webpack.config');

module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });


    grunt.initConfig({
        webpack: {
            options: {},
            dev: Object.assign({watch: true}, webpackconfig)
        }
    });
    grunt.loadNpmTasks('grunt-webpack');
    // Register group tasks
    grunt.registerTask('build', ['webpack']);

    grunt.registerTask('test', [ 'eslint', 'mochacli' ]);


};
