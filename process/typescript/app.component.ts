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
    artists: string[];

    // Initializer the variable for us. 
    constructor() {
        this.name = 'Bob';
        this.artists = ['Joe bob', 'Jim James', 'Lance Flutter'];
    }
}