'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'src/js/**/*.js', '!dist/app.min.js']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'dist/css/app.min.css': ['src/scss/app.scss']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/app.min.js': ['src/js/app.js']
        },
        options: {
          sourceMap: 'dist/app.min.js.map',
          sourceMappingURL: '/dist/app.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: ['index.html']
      }
    },
    clean: {
      dist: ['dist/app.min.css', 'dist/app.min.js']
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', ['clean', 'sass', 'uglify']);
  grunt.registerTask('dev', ['watch']);
};
