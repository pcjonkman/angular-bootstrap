# Installation

Local versions: Node 16.15.1 / NPM 8.11.0 / Angular CLI 14.0.5

- npm install -g @angular/cli
- ng new angular-bootstrap
    - Routing Y
    - SCCS
- npm install
- npm outdated
- update package.json with latest versions
- rm -rf node-modules
- rm packages-lock.json
- npm install


# Bootstrap
Add bootstrap based on
<https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/>


- npm install bootstrap bootstrap-icons
- npm install @ng-bootstrap/ng-bootstrap@next
- ng add @angular/localize

Change the angular.json file and add the bootstrap.scss, bootstrap-icons.css and bootstrap.bundle.min.js files as below:

```json

"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

Change the app.module.ts file and add the lines as below:

```typescript

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
  BrowserModule,
  NgbModule,
  AppRoutingModule,
],
```

# Clone
- Clone the repository.

```shell
git clone https://github.com/pcjonkman/angular-bootstrap.git
```

- Install the dependencies.

```shell
npm ci
```

- Run the application.

```shell
npm start
```
