module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var buildDir = (process.env.PREFIX || './dist') + '/';

  grunt.initConfig({
    clean: {
      options: { force: true },
      main: [buildDir + '**/*']
    },
    copy: {
     index: {
       src: 'index.html',
       dest: buildDir + 'index.html'
     },
     manifest: {
       src: 'fhir.json',
       dest: buildDir + 'fhir.json'
     }
    }
  });

  grunt.registerTask('build', ['clean', 'copy']);
};
