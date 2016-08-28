import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FishingRegion, FishingRegionService } from '../fishing-regions/shared/';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    regions: FishingRegion[] = [];

    constructor(
        private router: Router,
        private regionService: FishingRegionService) {
    }

    ngOnInit() {
		this.regionService.getAll()
			.subscribe(
				results => this.regions = results,
				e => console.log("ERROR in DashboardComponent: " + e),
				() => console.log("DashboardComponent: Getting all regions done!")
			);
    }

    gotoDetail(region: FishingRegion) {
		console.log('DashboardComponent.gotoDetail(): selected regionId [ ' + region.id + ' ] ')
        let link = ['dashboard/views/', region.id];
        this.router.navigate(link);
    }
}
