app = require('./module')
require('./data')
require('./sitemap')
log = require('./logger')

app.config ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: '/views/index.html'
      controller: 'WelcomeCtrl'
    .when '/page/:id',
      templateUrl: '/views/page.html'
      controller: 'PageCtrl'
    .otherwise
      templateUrl: '/views/404.html'

app.run ($rootScope, sitemap)->
  $rootScope.sitemap = sitemap
  log(sitemap)

app.controller 'WelcomeCtrl', ($scope)->
  $scope.header = "WelcomeCtrl"

app.controller 'PageCtrl', ($scope, $routeParams)->
  $scope.header = "PageCtrl"
  $scope.params = $routeParams
