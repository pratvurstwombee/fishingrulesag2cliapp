import { Component, OnInit } from '@angular/core';
import { Router } 		from '@angular/router';

import { Observable } 	from 'rxjs/Observable';

import { FishingRegion, FishingRegionService } from './shared/';

@Component({
  moduleId: module.id,
  selector: 'app-fishing-regions',
  templateUrl: 'fishing-regions.component.html',
  styleUrls: ['fishing-regions.component.css']
})
export class FishingRegionsComponent implements OnInit {

	regions: FishingRegion[] = [];
    error: any;
		
	constructor(
		private router: Router,
		private regionService: FishingRegionService) { }

	ngOnInit() {
		this.getAllRegions();
	}
	
	onSelect(region: FishingRegion) {
		this.gotoDetail(region.id);
	}
	
	getAllRegions(){
		this.regionService.getAll()
			.subscribe(
				results => this.regions = results,
				e => this.error = e,
				() => console.log("FishingRegionsComponent: Getting all regions done!")
			);
	}
	
	private gotoDetail(id:number) {
		this.router.navigate(['/regions/detail', id]);
	}

}
