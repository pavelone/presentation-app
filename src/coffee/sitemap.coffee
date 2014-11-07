app = require('./module')

app.service 'sitemap', ()->
  main: [
    {label:"Home", href: "#/"}
    {label:"Page1", href: "#/page/:id"}
  ]
  user: [
    {label: "Profile", href: '#/profile'}
    {label: "Sign in", href: '#/login'}
  ]


