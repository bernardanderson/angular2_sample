import {Component} from 'angular2/core';

// Decorator contains information about the controller
//  (Typescript addition, ES7 feature)
@Component({
    selector: 'my-app', 
    template: `
    <div class="artistsearch">
      <div class="cardsearch">
        <h1>Artist Directory</h1>
        <span>name</span>
      </div>
    </div>`
})

// Controller for the module
export class AppComponent {

}