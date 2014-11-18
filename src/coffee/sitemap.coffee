app = require('./module')

capitalize = (s)->
  s && s[0].toUpperCase() + s.slice(1)

buildSiteMap = (x)->
  x.href ||= "#/#{x.name}"
  x.templateUrl ||= "/views/#{x.name}.html"
  x.controller ||= "#{capitalize(x.name)}Ctrl"
  x

module.exports = {
  main: [
    {label:"fhirbase", href: "#/"}
    {name: 'install', label:"Installation", controller: 'WelcomeCtrl'}
    {name: 'fhirbase', label:"Working with fhirbase", controller: 'WelcomeCtrl'}
    {name: 'frontend', label:"Create frontend app", controller: 'WelcomeCtrl'}
    {name: 'application', label:"Application",  controller: 'WelcomeCtrl'}
  ].map(buildSiteMap)
}
