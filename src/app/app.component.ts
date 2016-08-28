import { Component }                from '@angular/core';
import { ROUTER_DIRECTIVES } 		    from '@angular/router';

import { FishingRegionService }     from './fishing-regions/shared/';
import { RestrictionService}        from './restrictions/shared/';
import { FishingRuleService }       from './fishing-rules/shared';
import { FishService }              from './fish-list/shared';
import { MarineAreaService }        from './marine-areas/shared';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
  	FishingRegionService,
    RestrictionService,
    FishingRuleService,
    FishService,
    MarineAreaService
  ]
})
export class AppComponent {
  title = 'Fishing Rules - SPA Angular2 App';
}
