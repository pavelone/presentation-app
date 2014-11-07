module.exports = function (grunt) {

  var buildDir = (process.env.PREFIX || './dist') + '/';

  [
  'grunt-contrib-copy',
  'grunt-contrib-watch',
  'grunt-contrib-clean',
  'grunt-contrib-concat',
  'grunt-contrib-less',
  'grunt-webpack',
  'grunt-connect',
  'grunt-angular-templates'
  ].forEach(function(tsk){
    grunt.loadNpmTasks(tsk);
  })

  grunt.initConfig({
    clean: {
      options: { force: true },
      main: [buildDir + '**/*']
    },
    copy: {
     index: {
       src: 'src/index.html',
       dest: buildDir + 'index.html'
     },
     manifest: {
       src: 'fhir.json',
       dest: buildDir + 'fhir.json'
     },
     fonts: {
       cwd: "./bower_components/bootstrap/fonts/",
       expand: true,
       src: '*',
       dest: buildDir + 'fonts/'
     },
    },
    concat: {
      lib: {
        src: [
          "./bower_components/jquery/dist/jquery.min.js",
          "./bower_components/angular/angular.js",
          "./bower_components/angular-route/angular-route.js",
          "./bower_components/angular-animate/angular-animate.js",
          "./bower_components/angular-cookies/angular-cookies.js",
          "./bower_components/angular-sanitize/angular-sanitize.js"
        ],
        dest: buildDir + 'js/lib.js'
      }
    },
    webpack: {
      app: {
        entry: "./src/coffee/app.coffee",
        output: {
          path: buildDir + '/js',
          filename: "app.js",
          library: "app",
          libraryTarget: "umd"
        },
        module: {
          loaders: [
           { test: /\.coffee$/, loader: "coffee-loader" }
          ]
        },
        resolve: { extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"]}
      }
    },
    ngtemplates: {
      app: {
        cwd: 'src/',
        src: 'views/**/*.html',
        dest: buildDir + 'js/views.js',
        options: {
          module: 'app',
          prefix: '/'
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["src/less", "bower_components/bootstrap/less"],
          cleancss: true,
          modifyVars: { bgColor: 'white' }
        },
        files: { "dist/css/app.css": ['src/less/app.less'] }
      }
    },
    watch: {
      main: {
        files: ['src/**/*'],
        tasks: ['build'],
        options: {
          events: ['changed', 'added'],
          nospawn: true
        }
      }
    },
   connect: { default: { port: 8080, base: 'dist' } }
  });

  grunt.registerTask('build', ['clean','concat','webpack','ngtemplates', 'less', 'copy']);
  grunt.registerTask('server', ['connect']);
};
