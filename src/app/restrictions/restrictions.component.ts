import { Component, OnInit, Input } from '@angular/core';
import { Router } 		from '@angular/router';

import { Observable } 	from 'rxjs/Observable';

import { Restriction, RestrictionService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-restrictions',
  templateUrl: 'restrictions.component.html',
  styleUrls: ['restrictions.component.css']
})
export class RestrictionsComponent implements OnInit {
	@Input()
	restrictions: Restriction[] = [];
	
    error: any;
		
	constructor(
		private router: Router,
		private restrictionService: RestrictionService) { }

	ngOnInit() {
		this.getAllRestrictions();
	}
	
	onSelect(restriction: Restriction) {
		this.gotoDetail(restriction.restrctrionId);
	}
	
	private getAllRestrictions(){
		this.restrictionService.getAll()
			.subscribe(
				results => 
				{
					this.restrictions = results;
				},
				e => this.error = e,
				() => console.log("FishingRulesComponent: Getting all fishing rule done!")
			);
	}
	
	private gotoDetail(id:number) {
		this.router.navigate(['/restrictions/detail', id]);
	}
}
