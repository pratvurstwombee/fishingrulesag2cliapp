import { Component, OnInit, Input } from '@angular/core';
import { Router } 		from '@angular/router';

import { Observable } 	from 'rxjs/Observable';

import { FishingRule, FishingRuleService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-fishing-rules',
  templateUrl: 'fishing-rules.component.html',
  styleUrls: ['fishing-rules.component.css']
})
export class FishingRulesComponent implements OnInit {
	@Input()
	fishingRules: FishingRule[] = [];
	
	selectedFish: string;
    error: any;
		
	constructor(
		private router: Router,
		private fishingRuleService: FishingRuleService) { }

	ngOnInit() {
		this.getAllFishingRules();
	}
	
	onSelect(fishRule: FishingRule) {
		this.gotoDetail(fishRule.fishId);
	}
	
	private getAllFishingRules(){
		this.fishingRuleService.getAll()
			.subscribe(
				results => 
				{
					this.fishingRules = results;
				},
				e => this.error = e,
				() => console.log("FishingRulesComponent: Getting all fishing rule done!")
			);
	}
	
	private gotoDetail(id:number) {
		this.router.navigate(['/fishingrules/detail', id]);
	}
}
