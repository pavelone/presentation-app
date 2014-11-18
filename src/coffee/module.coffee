require('../../bower_components/angular/angular.js')
require('../../bower_components/angular-route/angular-route.js')
require('../../bower_components/angular-sanitize/angular-sanitize.js')
require('../../bower_components/angular-animate/angular-animate.js')
require('../../bower_components/angular-cookies/angular-cookies.js')

module.exports = angular.module 'app', [
  'ngCookies'
  'ngAnimate'
  'ngSanitize'
  'ngRoute'
]
