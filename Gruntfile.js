/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
            // Metadata.
            pkg: grunt.file.readJSON('package.json'),
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
            // Task configuration.
            concat: {
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                },
                dist: {
                    src: ['lib/<%= pkg.name %>.js'],
                    dest: 'dist/<%= pkg.name %>.js'
                }
            },
            uglify: {
                options: {
                    banner: '<%= banner %>'
                },
                dist: {
                    src: '<%= concat.dist.dest %>',
                    dest: 'dist/<%= pkg.name %>.min.js'
                }
            },
            jshint: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    unused: true,
                    boss: true,
                    eqnull: true,
                    browser: true,
                    globals: {}
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            },
            typescript: {
                base: {
                    src: ['xtag/**/*.ts'],
                    //dest: 'where/you/want/your/js/files',
                    options: {
                        module: 'amd', //or commonjs
                        target: 'es5', //or es3
                        //base_path: 'xtag',
                        sourcemap: true,
                        fullSourceMapPath: true,
                        declaration: true
                    }
                }
            },
            qunit: {
                files: ['test/**/*.html']
            },
            watch: {
                gruntfile: {
                    files: '<%= jshint.gruntfile.src %>',
                    tasks: ['jshint:gruntfile']
                },
                lib_test: {
                    files: '<%= jshint.lib_test.src %>',
                    tasks: ['jshint:lib_test', 'qunit']
                }
            }
        }
    );

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['typescript', 'jshint', 'qunit', 'concat', 'uglify']);

};
