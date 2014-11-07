module.exports = function (grunt) {

  var buildDir = (process.env.PREFIX || './dist') + '/';

  [
  'grunt-contrib-copy',
  'grunt-contrib-watch',
  'grunt-contrib-clean',
  'grunt-contrib-less',
  'grunt-webpack',
  'grunt-connect'
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
    webpack: {
      app: {
        entry: "./src/coffee/app.coffee",
        output: {
          path: buildDir,
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

  grunt.registerTask('build', ['clean','webpack','less', 'copy']);
  grunt.registerTask('server', ['connect']);
};
