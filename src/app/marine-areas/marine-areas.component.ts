import { Component, OnInit } from '@angular/core';
import { Router } 		from '@angular/router';
import { Observable } 	from 'rxjs/Rx';

import { MarineArea, MarineAreaService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-marine-areas',
  templateUrl: 'marine-areas.component.html',
  styleUrls: ['marine-areas.component.css']
})
export class MarineAreasComponent implements OnInit {
	marineAreas: MarineArea[] = [];
    error: any;
		
	constructor(
		private router: Router,
		private marineAreaService : MarineAreaService) { }

	ngOnInit() {
		this.getAllMarineRegions();
	}
	
	onSelect(marineArea: MarineArea) {
		this.gotoDetail(marineArea.id);
	}
	
	getAllMarineRegions(){
		this.marineAreaService.getAll()
			.subscribe(
				results => this.marineAreas = results,
				e => this.error = e,
				() => console.log("MarineAreasComponent: Getting all marine areas done!")
			);
	}
	
	private gotoDetail(id:number) {
		this.router.navigate(['/marineareas/detail', id]);
	}
}
