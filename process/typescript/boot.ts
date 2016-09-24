import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'; // Initializes the application

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'my-app', 
    template: '<h1>Welcome to my App</h1>'
})

// Controller for the module
class AppComponent {

}

// Loads the function.  Looks for the selector in the 'Component' (as a HTML tag in the index.html)
//  and binds the content to it.
bootstrap(AppComponent);

