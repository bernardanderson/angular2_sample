import {Component} from 'angular2/core';

// TS/ES6 Interface for adding typing to JS variables 
interface Artist {
  name: string,
  shortname: string,
  reknown: string,
  bio: string
}

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'artist-details', 
    templateUrl: 'partials/artistdetails.html',
    inputs: ['artist']
})

export class ArtistDetailsComponent {}
