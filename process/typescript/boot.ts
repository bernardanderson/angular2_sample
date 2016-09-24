import {bootstrap} from 'angular2/platform/browser'; // Initializes the application
import {AppComponent} from './app.component';  // Loads the app.component.js module

// Loads the function.  Looks for the selector in the 'Component' (as a HTML tag in the index.html)
//  and binds the content to it.
bootstrap(AppComponent);

