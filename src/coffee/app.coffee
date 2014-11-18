app = require('./module')

require('file?name=index.html!../index.html')
require('file?name=fhir.json!../fhir.json')
require('../less/app.less')
require('./views')

sitemap = require('./sitemap')

app.config ($routeProvider) ->
  rp = $routeProvider
    .when '/',
      templateUrl: '/views/index.html'
      controller: 'WelcomeCtrl'

  mkRoute = (acc, x)->
    acc.when("/#{x.name}", x)

  rp = sitemap.main.reduce mkRoute, rp

  rp.otherwise
    templateUrl: '/views/404.html'

activate = (name)->
  sitemap.main.forEach (x)->
    if x.name == name
      x.active = true
    else
      delete x.active

app.run ($rootScope)->
  $rootScope.brand = "Fhirbase"
  $rootScope.sitemap = sitemap
  $rootScope.$on  "$routeChangeStart", (event, next, current)->
    activate(next.name)

app.controller 'WelcomeCtrl', ($scope)->
  $scope.header = "WelcomeCtrl"

app.controller 'FrontendCtrl', ($scope, $sce)->
  content = require('../markdown/frontend.md')
  $scope.content = $sce.trustAsHtml(content)

app.controller 'InstallCtrl', ($scope, $sce)->
  content = require('../markdown/install.md')
  $scope.content = $sce.trustAsHtml(content)

app.controller 'ProfileCtrl', ($scope, $routeParams)->
  $scope.header = "ProfileCtrl"
