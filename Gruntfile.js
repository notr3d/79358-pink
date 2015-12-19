"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),
    
    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less",
        }
      }
    },
      
    cmq: {
        style: {
            files: {
                "build/css/style.css": ["build/css/style.css"]
            }
        }
    },
      
    clean: {
        build: ["build"]    
    },
      
    copy: {
        build: {
            files: [{
                expand: true,
                cwd: "source",
                src: [
                    "img/**",
                    "*.html"
                ],
                dest: "build"
            }]
        }    
    },
      

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },
      
      cssmin: {
          options: {
              keepSpecialComments: 0,
              report: "qzip"
          },
          style: {
              files: {
                  "build/css/style.min.css": ["build/css/style.css"]
              }
          }
      },
      
      imagemin: {
        images: {
            options: {
                optimizationLevel: 3
            },
            files: [{
                expand: true,
                src: ["build/img/**/*.{png,jpg,gif,svg}"]
            }]
        }  
      },
      htmlmin: {
        options: {
            removeComments: true,
            collapseWhitespace: true, 
            collapseBooleanAttributes: true,
            caseSensetive: true,
            keepClosingSlash: false
        },
          html: {
              files: {
                  "build/index.min.html": "build/index.html",
                  "build/form.min.html": "build/form.html"
              }
          }
      },
      
      concat: {
          options: {
              separator: ";"
          },
          dist: {
              src: [
                  "source/js/vendors/*.js",
                  "source/js/*.js"
              ],
              dest: "build/js/script.js"
          }
      },
      
    uglify: {
        build: {
            files: {
            'build/js/script.min.js': ['build/js/script.js']
            }
        }
    },
      
    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  };
  
    grunt.registerTask("build", [
        "clean",
        "copy",
        "less",
        "cmq",
        "postcss",
        "cssmin",
        "imagemin",
        "concat",
        "uglify",
        "htmlmin"
    ]);

  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);
};
