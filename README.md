# AngularCrudExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Project decisions

Followed the dumb/smart components approach. Only the containers (smart components) has the responsibility to "talk" with services<p>
As an example it was created unit tests for the app and car modal components.<p>
It was created a cars helper to deal with the dictionary that is Responsible to handle with some dynamic data.<p>
It was created a location-utils to build an url in a more cleaner way.<p>
It was created a config file with constants to avoid magic strings.<p>
Since this Challenge was focus on the front end part, it was decided to use a NoSQL database such as Firebase to manage all data in our CRUD operations. (not working, you need to create your own database on firebase)<p>
Used BEM principle<p>

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
