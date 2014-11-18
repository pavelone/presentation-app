## Creating frontend application for fhirplace

---

[node.js](http://nodejs.org/) is used for development.
Preferred way to install node is [nvm](https://github.com/creationix/nvm#installation)
(node version manager).

When you have installed node,
clone example repository [fhirbase-empty-plugin]()

```
git clone https://github.com/fhirbase/fhirplace-empty-plugin [APP-NAME]
```

This is preconfigured application, which consist of:

* fhir.js
* angularjs
* coffee
* less
* npm
* bower
* webpack

All util scripts are described at package.json



You can publish it on any installation of
[fhirplace]() server.

```sh
npm run-script fhir
```

For development start [webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html) and
open browser on http://localhost:8080:

```sh
npm start
```
