import { Component }                from '@angular/core';
import { ROUTER_DIRECTIVES } 		    from '@angular/router';

import { FishingRegionService }     from './fishing-regions/shared/';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
  	FishingRegionService,
  ]
})
export class AppComponent {
  title = 'Fishing Rules - SPA Angular2 App';
}
