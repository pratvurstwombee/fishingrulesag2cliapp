import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FishingRegion, FishingRegionService } from '../fishing-regions/shared/';
import { FishingRule } from '../fishing-rules/shared';
import { Restriction } from '../restrictions/shared';
import { ViewRulesComponent } from './view-rules.component';
import { ViewRestrictionsComponent } from './view-restrictions.component';  

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-views',
  templateUrl: 'dashboard-views.component.html',
  styleUrls: ['dashboard-views.component.css'],
  directives: [ ViewRulesComponent, ViewRestrictionsComponent]
})
export class DashboardViewsComponent implements OnInit {
	currentRegionId: number;
	currentRegion:string;

	sub: any;
	error: any;

  constructor(
    private route: ActivatedRoute, 
    private regionService: FishingRegionService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['regionId'] !== undefined) {
                let regionId = +params['regionId'];

                this.currentRegionId = regionId;
                
                this.regionService.getById(regionId)
                                    .subscribe(result => this.currentRegion = result.region);
            } else {
                // just display an error for demo
                this.error = 'Fishing Region is not currently selected!'
            }
        });
    }

  goBack() {
      window.history.back();
  }}
