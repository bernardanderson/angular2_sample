import {Component} from 'angular2/core';

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'my-app', 
    templateUrl: 'partials/app.html',
    styleUrls: ['css/app.css']
})

// Controller for the module
export class AppComponent {

    // Typescript for setting sample variables 
    name: string = 'Mary';
    artists: string[] = ['Joe bob','Lance Flutter', 'Hal James'];

    onClick(myName, myElement) {
      this.name = myName;
      myElement.style.backgroundColor="#FECE4E";
      console.log(myName);
      console.log(myElement); 
    }

    addArtist(myArtist) {
      this.artists.push(myArtist);
    }
}