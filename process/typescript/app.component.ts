import {Component} from 'angular2/core';

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'my-app', 
    templateUrl: 'partials/app.html'
})

// Controller for the module
export class AppComponent {

    // Typescript for setting sample variables 
    name: string = 'Bob';
    artists: string[] = ['Joe bob','Lance Flutter', 'Hal James'];

    onClick(sentEvent) {
      this.name = sentEvent.target.innerHTML;
      console.log(sentEvent.target.innerHTML);
    }
}