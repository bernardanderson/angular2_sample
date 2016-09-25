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
    name: string = 'Mary';
    artists: string[] = ['Joe bob','Lance Flutter', 'Hal James'];

    onClick(myName) {
      this.name = myName;
      console.log(myName);
    }

    addArtist(myArtist) {
      this.artists.push(myArtist);
    }
}