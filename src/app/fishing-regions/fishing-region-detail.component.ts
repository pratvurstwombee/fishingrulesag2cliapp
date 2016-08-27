import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FishingRegion, FishingRegionService } from './shared/';

@Component({
  moduleId: module.id,
  selector: 'app-fishing-region-detail',
  templateUrl: 'fishing-region-detail.component.html',
  styleUrls: ['fishing-region-detail.component.css']
})
export class FishingRegionDetailComponent implements OnInit {

	@Input()
  selectedRegion: FishingRegion;
	
	sub: any;
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private fishingRegionService: FishingRegionService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;

        this.fishingRegionService.getById(id)
            .subscribe(result => {
                        this.selectedRegion = result;
            },
            e => this.error = e);
      } else {
        // just display an error for demo
        this.error = 'Fishing Region is not currently selected!'
      }
    });
  }

  goBack() {
      window.history.back();
  }	
}
