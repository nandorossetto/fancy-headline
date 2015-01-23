module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            files: [
                'Gruntfile.js',
                'js/jquery.fancy.headline.js'
            ],

            globals: {
                jQuery: true
            }
        },

        uglify: {
            options: {
                mangle: false
            },

            target: {
                files: {
                    'js/jquery.fancy.headline.min.js': ['js/jquery.fancy.headline.js']
                }
            }
        },

        watch: {
            jshint:{
                files: '<%= jshint.files %>',
                tasks: ['jshint']
            },
        }
    });

    require('load-grunt-tasks')(grunt);
};
