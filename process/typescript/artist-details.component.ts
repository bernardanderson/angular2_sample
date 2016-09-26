import {Component} from 'angular2/core';
import {Artist} from './artist';

// The Artist interface that was once here has been added to it's own file (artist.ts) and
//  is imported on line 2 above. 

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'artist-details', 
    templateUrl: 'partials/artistdetails.html',
    inputs: ['artist'],
})

export class ArtistDetailsComponent {}
