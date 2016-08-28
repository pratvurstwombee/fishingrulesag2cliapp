import { Component, OnInit, Input } from '@angular/core';
import { FishingRule, FishingRuleService } 			from '../fishing-rules/shared';

@Component({
  moduleId: module.id,
  selector: 'app-view-rules',
  templateUrl: 'view-rules.component.html',
  styleUrls: ['view-rules.component.css']
})
export class ViewRulesComponent implements OnInit {
	@Input()
	regionId: number;

	fishingRules: FishingRule[] =[];

	constructor(private fishingRuleService: FishingRuleService) { }

	ngOnInit() {
		this.fishingRuleService.getAll()
			.subscribe(
				results => 
				{
					if(this.fishingRules){
						console.log('DashboardRegionRulesComponent.ngOnInit(): rules array has ' + this.fishingRules.length + ' items')
					}
					console.log('DashboardRegionRestrictionsComponent.ngOnInit(): selected RegionId [' + this.regionId + ' ] ')
					console.log('DashboardRegionRulesComponent.ngOnInit(): number of results returned [ ' + results.length + ' ]');
					
					/* A bit hacked to display filtered list. This is just array manipulation, not Obserbable manipulation */
					var list:FishingRule[] =[];
					var count: number = 0;
					
					for(var i = 0; i < results.length; i++) {
						if(results[i].regionId === this.regionId) {
							list[count++] = <FishingRule>results[i];
						}
					}					
					console.log('DashboardRegionRulesComponent.ngOnInit(): number of results filtered [ ' + count + ' ]');
					
					this.fishingRules = list;
				},
				e => console.log('ERROR in DashboardRegionRulesComponent: ' + e),
				() => console.log("DashboardRegionRulesComponent: Getting all items done!")
			);
	}
}
