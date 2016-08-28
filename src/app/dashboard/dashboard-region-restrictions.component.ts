import { Component, OnInit, Input } from '@angular/core';

import { Restriction, RestrictionService } 				from '../restrictions/shared';

@Component({
  selector: 'app-dashboard-region-restrictions',
  templateUrl: 'dashboard-region-restrictions.component.html',
  styleUrls: ['dashboard-region-restrictions.component.css']
})
export class DashboardRegionRestrictionsComponent implements OnInit {
	@Input()
	regionId: number;
	
	restrictions: Restriction[] =[];

	constructor(
		private restrictionService: RestrictionService) { }

	ngOnInit() {
		this.restrictionService.getAll()
			.subscribe(
				results => 
				{
					console.log('DashboardRegionRestrictionsComponent.ngOnInit(): selected RegionId [' + this.regionId + ' ] ')
					console.log('DashboardRegionRestrictionsComponent.ngOnInit(): number of results returned [ ' + results.length + ' ]');
					
					/* A bit hacked to display filtered list. This is just array manipulation, not Obserbable manipulation */
					var list:Restriction[] =[];
					var count: number = 0;
					
					for(var i = 0; i < results.length; i++) {
						if(results[i].regionId === this.regionId) {
							list[count++] = <Restriction>results[i];
						}
					}
					
					console.log('DashboardRegionRestrictionsComponent.ngOnInit(): number of results filtered [ ' + count + ' ]');
					this.restrictions = list;
				},
				e => console.log('ERROR in DashboardRegionRestrictionsComponent: ' + e),
				() => console.log("DashboardRegionRestrictionsComponent: Getting all items done!")
			);
	}

}
