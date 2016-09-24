import {Component} from 'angular2/core';

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'my-app', 
    templateUrl: 'partials/app.html'
})

// Controller for the module
export class AppComponent {

    // More formal method, ES6/Typescript
    name: string;
    artists: Object[];

    // Initializer the variable for us. 
    constructor() {
        this.name = 'Bob';
        this.artists = [
          {
            name: 'Joe bob',
            school: 'Penn State'
          }, {
            name: 'Lance Flutter',
            school: 'University of Illinois'
          }
        ];
    }
}